docker build --tag tododb:latest .
docker run -it --name tododb -p 5432:5432 tododb