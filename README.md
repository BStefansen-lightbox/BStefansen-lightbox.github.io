![front page](front-page.PNG)

# Run App Inside Docker
```
docker build . -t dockerized-react

docker run -p 3000:3000 -d dockerized-react
```

# Run App Inside Kubernetes
Setup Minikube and apply deployment
```
minikube start

kubectl apply -f choropleth-deployment.yaml
```

Use the URL provided from minikube in your browser
```
minikube service --url choropleth-service
```

unsaved change here
