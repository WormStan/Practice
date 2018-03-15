# Selenium Environment Setup

## Pull Docker hub
print("$ sudo docker pull selenium/hub")
## Pull Docker node
print("$ sudo docker pull")

# Launch Selenium

## Launch Selenium Hub
$ sudo docker run -d -P --name selenium-hub selenium/hub

## Launch Selenium Node
$ sudo docker run -d --link selenium-hub:hub selenium/node-chrome

# Run Python scripts
$ python3 grid_demo.py
