# Alive

## To run the project

First, clone the project using `git clone https://github.com/deepdeev/alive.git`

Then in the project directory, `run meteor`. This will run the application and tell you if there are any missing dependencies that you should install

### Notes
When you run the application, you will get warnings related to the meteor version that we are using. Ignore them.

## To run the API tests

Make sure you have the required packages with meteor add practicalmeteor:mocha

Now, in order to open Mocha test pages:

meteor test --driver-package practicalmeteor:mocha --port 3005

This will open testing page on port 3005

## To run the load tests

We are using Locust, a python load testing framework which is configurable via code and offers a nice and useful web interface.

In order to install Locust, create a virtual environment using virtualenv and inside of it, run `pip install locustio`

Once inside, create your testfile and name it locustfile.py

Then run the tests using `locust --host=http://localhost:3000` as our Meteor application is running at port 3000 of the localhost

Enter  http://127.0.0.1:8089 in your browser. That should display the web interface for locust.

Our results are on the [load_testing](https://github.com/deepdeev/alive/tree/master/load_testing/results.md) folder

## Usability testing

We followed guidelines specified here. [here](https://github.com/deepdeev/alive/blob/master/Usability.md)

## Security meausures

We followed guidelines specified here. [here](https://guide.meteor.com/security.html#checklist)
