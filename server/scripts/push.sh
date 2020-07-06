sh ./scripts/build.sh &&
echo "$DOCKER_P" | docker login -u "$DOCKER_U" --password-stdin &&
docker push catufuzg/todo-app:latest