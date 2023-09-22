# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /spvapp

# Copy the current directory contents into the container at workdir shown
COPY . .

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 8050 available to the world outside this container
EXPOSE 8050

# Define the command to run your application
CMD ["python", "app.py"]
