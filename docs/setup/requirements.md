# REQUIREMENTS

## Software

1. Docker version 19.03.4 or above
more detail on https://phoenixnap.com/kb/how-to-install-docker-on-ubuntu-18-04

    Step 1: Update Software Repositories
    ```
    $ sudo apt-get update
    ```

    Step 2: Uninstall Old Versions of Docker
    ```
    $ sudo apt-get remove docker docker-engine docker.io
    ```

    Step 3: Install Docker on Ubuntu 18.04
    ```
    $ sudo apt install docker.io
    ```

    Step 4: Start and Automate Docker
    ```
    $ sudo systemctl start docker
    ```
    ```
    $ sudo systemctl enable docker
    ```

2. Docker-compose version 1.17.1 or above
https://www.techiediaries.com/ubuntu/install-docker-19-docker-compose-ubuntu-20-04/

    Install the Stable Docker-Compose Version from the Ubuntu Repository
    ```
    $ sudo apt install docker-compose
    ```

   Wait for the process to complete, next run the following command to check that docker-compose has been successfully installed:
   ```
   $ docker-compose version
   ```
