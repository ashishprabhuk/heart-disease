import pandas as pd
import numpy as np
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.metrics import accuracy_score, classification_report
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
import warnings
warnings.filterwarnings("ignore")

data = pd.read_csv("./heart disease classification dataset.csv")

numeric_columns = data.select_dtypes(include='number')
data[numeric_columns.columns] = data[numeric_columns.columns].fillna(numeric_columns.mean())

# Check for missing values in all columns
missing_values = data.isnull().sum()
# Display columns with missing values, if any
print(missing_values[missing_values > 0])

data['sex'] = data['sex'].map({'female': 0, 'male': 1})
# Convert 'target' column to numerical format (0 for no heart disease, 1 for heart disease)
data['target'] = data['target'].map({'no': 0, 'yes': 1})
# Display the first few rows of the dataset after transformation
print(data.head())

data.drop('Unnamed: 0', axis=1, inplace=True)
# Display the columns after removal
print(data.columns)

scaler = MinMaxScaler()

# Normalize the data
data_normalized = scaler.fit_transform(data)
data_normalized = pd.DataFrame(data_normalized, columns=data.columns)
print(data_normalized.head())

selected_features = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope']
X = data[selected_features]
y = data['target']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
logistic_classifier = LogisticRegression()

# Fit the classifier on the training data
logistic_classifier.fit(X_train_scaled, y_train)

# Make predictions on the scaled testing data
y_pred = logistic_classifier.predict(X_test_scaled)

# Calculate accuracy
accuracy = accuracy_score(y_test, y_pred)
print("Logistic Regression Classifier Accuracy:", accuracy)

# Classification report
print("Classification Report for Logistic Regression Classifier:")
print(classification_report(y_test, y_pred))

def get_values(json_vals):

    print(json_vals)
    df = pd.DataFrame([json_vals])
    
    #print(df.dtypes)
    input_data_scaled = scaler.transform(df)

    # Make predictions using the trained Logistic Regression classifier
    prediction = logistic_classifier.predict(input_data_scaled)

    # Output the prediction result
    if prediction[0] == 1:
        print("Heart Disease Predicted")
        return True
    else:
        print("No heart disease predicted")
        return False
