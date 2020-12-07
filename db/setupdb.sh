docker build --tag tododb:latest .
docker container rm $(docker container ls -af name=tododb -q)
docker run -it --name tododb -p 5432:5432 tododb