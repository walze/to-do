docker build . \
  -f ./docker/app.dockerfile \
  -t catufuzgu/todo-app \
  --build-arg NODE_ENV=production \
  --build-arg SCRIPT=start