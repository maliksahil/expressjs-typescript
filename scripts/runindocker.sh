docker build --tag nodeapp:latest .
docker container rm $(docker container ls -af name=nodeapp -q)
docker run -it --name nodeapp -p 8080:8080 nodeapp