import pandas as pd
import numpy as np
from flask import Flask, request, jsonify
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import xgboost as xgb
from sklearn.svm import SVR
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error, r2_score, mean_absolute_error
from flask_cors import CORS
# load the data into a pandas DataFrame
df = pd.read_excel('C:/Users/fares/Desktop/emission2.xlsx', sheet_name='Sheet1')

# separate the target variable (Emissions) from the features
X = df[['Date', 'Country']]
y = df['Emissions']

# create a one-hot encoding of the Country column
X_encoded = pd.get_dummies(X, columns=['Country'])

# ensure that the training and testing sets have the same number of columns
missing_cols = set(X_encoded.columns) - set(X_encoded.columns)
for c in missing_cols:
    X_encoded[c] = 0

# create a RandomForestRegressor object and fit it to the data
rf = RandomForestRegressor()
rf.fit(X_encoded, y)

# create a Flask app
app = Flask(__name__)
#CORS(app, origins=['http://localhost:4200'])
CORS(app)
#app.config['SERVER_ADDRESS'] = '192.168.173.78'


# create a route for the API endpoint
@app.route('/predict_emissions', methods=['POST'])
def predict_emissions():
    # get the target country and date from the request body
    target_country = request.json['Country']
    target_date = int(request.json['Target_Date'])

    # create a new DataFrame with the target country and date
    target_df = pd.DataFrame({
        'Date': [target_date],
        'Country': [target_country]
    })

    # encode the target DataFrame using the same one-hot encoding as the training data
    target_df_encoded = pd.get_dummies(target_df, columns=['Country'])
    missing_cols = set(X_encoded.columns) - set(target_df_encoded.columns)
    for c in missing_cols:
        target_df_encoded[c] = 0
    target_df_encoded = target_df_encoded[X_encoded.columns]

    # use the trained model to make a prediction
    predicted_emissions = rf.predict(target_df_encoded)[0]

    # create a response dictionary
    response = {
        'predicted_emissions': predicted_emissions
    }

    # return the response as a JSON object
    return jsonify(response)

@app.route('/distinct_countries', methods=['GET'])
def get_distinct_countries():
     
    distinct_countries = list(df['Country'].unique())

     
    return jsonify(distinct_countries)


#*****************************************NEX*******************************************************


@app.route('/predict_water', methods=['POST'])
def predict2():
         
    df = pd.read_excel('C:/Users/fares/Desktop/freshwaterglobal.xlsx')

    # separate the target variable (Emissions) from the features
    X = df[['date', 'country']]
    y = df['Annual freshwater withdrawals']

    # split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # create a one-hot encoding of the Country column
    X_train_encoded = pd.get_dummies(X_train, columns=['country'])
    X_test_encoded = pd.get_dummies(X_test, columns=['country'])

    # ensure that the training and testing sets have the same number of columns
    missing_cols = set(X_train_encoded.columns) - set(X_test_encoded.columns)
    for c in missing_cols:
        X_test_encoded[c] = 0
    X_test_encoded = X_test_encoded[X_train_encoded.columns]

    # create an XGBoost regressor object and fit it to the training data
    xgb_model = xgb.XGBRegressor()
    xgb_model.fit(X_train_encoded, y_train)

    # get the input data from the client
    data = request.get_json()

    # extract the target country and date from the input data
    target_country = data['country']
    target_date = int(data['date'])

    # create a new DataFrame with the target country and date
    target_df = pd.DataFrame({
        'date': [target_date],
        'country': [target_country]
    })

    # encode the target DataFrame using the same one-hot encoding as the training data
    target_df_encoded = pd.get_dummies(target_df, columns=['country'])
    missing_cols = set(X_train_encoded.columns) - set(target_df_encoded.columns)
    for c in missing_cols:
        target_df_encoded[c] = 0
    target_df_encoded = target_df_encoded[X_train_encoded.columns]

    # use the trained model to make a prediction
    predicted_Annualfreshwaterwithdrawals = xgb_model.predict(target_df_encoded)

    # return the predicted value as a JSON object
    return jsonify({'prediction': predicted_Annualfreshwaterwithdrawals.tolist()})


@app.route('/distinct_countries_nex', methods=['GET'])
def get_distinct_countries2():
    df = pd.read_excel('C:/Users/fares/Desktop/freshwaterglobal.xlsx')
    # Get the distinct countries
    distinct_countries = list(df['country'].unique())

    # Return the list as a JSON response
    return jsonify(distinct_countries)


#*****************************************boulbeba*******************************************************



@app.route('/predictpoverty', methods=['POST'])
def predictpoverty():
        
    # load the data into a pandas DataFrame
    df = pd.read_excel('C:/Users/fares/Desktop/povertyline.xlsx')

    # separate the target variable (Emissions) from the features
    X = df[['Country Name', 'Year']]
    y = df['Poverty headcount ratio at $2.15 a day (2017 PPP) (% of population)']
    if np.isnan(y).any() or np.isinf(y).any():
        # Replace invalid values with the mean of the label array
        y[np.isnan(y) | np.isinf(y)] = np.mean(y[np.isfinite(y)])
        # split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # create a one-hot encoding of the Country column
    # create a one-hot encoding of the Country column
    X_train_encoded = pd.get_dummies(X_train, columns=['Country Name'])
    X_test_encoded = pd.get_dummies(X_test, columns=['Country Name'])

    # ensure that the training and testing sets have the same number of columns
    # ensure that the training and testing sets have the same number of columns
    missing_cols = set(X_train_encoded.columns) - set(X_test_encoded.columns)
    for c in missing_cols:
        X_test_encoded[c] = 0
    X_test_encoded = X_test_encoded[X_train_encoded.columns]

    # create an XGBoost regressor object and fit it to the training data
    xgb_model = xgb.XGBRegressor()
    xgb_model.fit(X_train_encoded, y_train)


    # get the input data from the client
    data = request.get_json()

    # extract the target country and date from the input data
    target_country = data['country']
    target_date = int(data['date'])

    # create a new DataFrame with the target country and date
    target_df = pd.DataFrame({
        'Year': [target_date],
        'Country Name': [target_country]
    })

    # encode the target DataFrame using the same one-hot encoding as the training data
    target_df_encoded = pd.get_dummies(target_df, columns=['Country Name'])
    missing_cols = set(X_train_encoded.columns) - set(target_df_encoded.columns)
    for c in missing_cols:
        target_df_encoded[c] = 0
    target_df_encoded = target_df_encoded[X_train_encoded.columns]

    # use the trained model to make a prediction
    predicted_poverty = xgb_model.predict(target_df_encoded)

    # return the predicted value as a JSON object
    return jsonify({'prediction': predicted_poverty.tolist()})





# create a route for the prediction endpoint
@app.route('/predict_hunger', methods=['POST'])
def predict_hunger():
    
    # load the data into a pandas DataFrame
    df = pd.read_excel('C:/Users/fares/Desktop/AGRICULTURE_F.xlsx')
    df.dropna(inplace=True)
    # separate the target variable (Taux de famine) from the features
    X = df[['Date', 'Country']]
    y = df['Taux de famine']

    # create a one-hot encoding of the Country column
    X_encoded = pd.get_dummies(X, columns=['Country'])

    # create a RandomForestRegressor object and fit it to the data
    rf = RandomForestRegressor()
    rf.fit(X_encoded, y)

    # get the request data as a JSON object
    req = request.get_json()
    
    # extract the target_country and target_date from the request data
  
    
    target_country = request.json['country']
    target_date = int(request.json['date'])
    # create a DataFrame with the target country and date
    target_df = pd.DataFrame({
        'Date': [target_date],
        'Country': [target_country]
    })
    
    # encode the target DataFrame using the same one-hot encoding as the training data
    target_df_encoded = pd.get_dummies(target_df, columns=['Country'])
    missing_cols = set(X_encoded.columns) - set(target_df_encoded.columns)
    for c in missing_cols:
        target_df_encoded[c] = 0
    target_df_encoded = target_df_encoded[X_encoded.columns]

    # use the trained model to make a prediction
    predicted_value = rf.predict(target_df_encoded)

    # return the predicted value as a JSON object
    return jsonify({'prediction': predicted_value.tolist()})


#****************** SI FLAM Recomm ****************
import matplotlib.pyplot as plt
import random
 

@app.route("/recommendations", methods=["POST"])
def get_recommendations_for_country():
    # Get the country name from the request body
    df = pd.read_excel('C:/Users/fares/Desktop/emission2.xlsx', sheet_name='Sheet1')
    country = request.json["country"]


    df_country = df[df['Country'] == country]
 
  # Create and save the plot
    fig, ax = plt.subplots()
    ax.plot(df_country['Date'], df_country['Emissions'])
    ax.set_title(f'Emissions for {country}')
    ax.set_xlabel('Date')
    ax.set_ylabel('Emissions (metric tons per capita)')
    fig.savefig(f'C:/Users/fares/Desktop/PI/PEBI_front/src/assets/img/{country}.png')

    # Define a list of messages for high emissions
    high_emissions_messages = [
        f"{country} has high emissions compared to the global average. Consider promoting the use of renewable energy sources and implementing policies to reduce emissions.",
        f"{country} is one of the top emitters in the world. To address this, consider implementing ambitious climate policies and investing in clean energy sources.",
        f"{country} needs to reduce its emissions to help mitigate the impacts of climate change. Consider partnering with other countries and organizations to identify opportunities to reduce emissions.",
        f"{country} needs to do its part to address climate change. Consider investing in clean energy sources and transitioning away from fossil fuels."
    ]

    # Define a list of messages for low emissions
    low_emissions_messages = [
        f"{country} has relatively low emissions compared to the global average. Continue to promote sustainable practices and conservation efforts.",
        f"{country} is setting a great example for other countries by keeping its emissions low. Continue to promote renewable energy sources and sustainable practices.",
        f"{country} is on the right track with its low emissions. Consider investing in more sustainable infrastructure and expanding clean energy sources.",
        f"{country} is helping to lead the way in addressing climate change by keeping its emissions low. Consider sharing best practices with other countries to help them reduce their emissions."
    ]
    medium_emissions_messages = [
        f"{country}'s emissions are at a moderate level. Consider implementing additional policies to reduce emissions and promote the use of renewable energy sources.",
        f"{country} can further reduce its emissions by implementing more ambitious climate policies and investing in clean energy sources.",
        f"{country}'s emissions are not the highest, but there is still room for improvement. Consider partnering with other countries and organizations to identify opportunities to reduce emissions.",
        f"{country} can play a key role in addressing climate change by reducing its emissions. Consider exploring new technologies and best practices to accelerate emissions reductions."
   ]   

 
       
    # Calculate summary statistics
    mean_emissions = df_country['Emissions'].mean()
    std_emissions = df_country['Emissions'].std()

    # Provide randomized recommendations based on the summary statistics
    if mean_emissions > 100:
        message = random.choice(high_emissions_messages)
        if std_emissions > 10:
            message += " " + random.choice(["In addition, consider conducting further research to better understand the factors contributing to this variability.", "Furthermore, explore opportunities to reduce emissions in high-emitting sectors."])
        else:
            message += " " + random.choice(["In addition to promoting renewable energy sources and implementing policies to reduce emissions, consider exploring new technologies to accelerate emissions reductions.", "To help reduce emissions, consider partnering with other countries and organizations to identify opportunities for collaboration."])
    elif mean_emissions > 50 and mean_emissions < 100:
        message = random.choice(medium_emissions_messages)
        if std_emissions > 10:
            message += " " + random.choice(["Although the emissions for {country} are at a medium level, they are quite variable. Consider conducting further research to better understand the factors contributing to this variability and to identify opportunities to further reduce emissions.", "Despite medium emissions, there may be opportunities to reduce emissions further by targeting high-emitting sectors."])
        else:
            message += " " + random.choice(["Continue to promote sustainable practices and conservation efforts, and consider exploring new opportunities to reduce emissions.", "To further reduce emissions, consider investing in clean energy sources and expanding sustainable infrastructure."])
    else:
        message = random.choice(low_emissions_messages)
        if std_emissions > 10:
            message += " " + random.choice(["Although the emissions for {country} are low, they are quite variable. Consider conducting further research to better understand the factors contributing to this variability and to identify opportunities to further reduce emissions.", "Despite low emissions, there may be opportunities to reduce emissions further by targeting high-emitting sectors."])
        else:
            message += " " + random.choice(["Continue to promote sustainable practices and conservation efforts, and consider exploring new opportunities to reduce emissions.", "To further reduce emissions, consider investing in clean energy sources and expanding sustainable infrastructure."])

 
    
    return {"recommendations": message}


# Run the Flask app
if __name__ == "__main__":
    app.run()
