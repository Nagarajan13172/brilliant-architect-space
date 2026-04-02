pipeline {
  agent any

  environment {
    DOCKER_IMAGE    = 'sathish-portfolio'
    DOCKER_REGISTRY = 'ghcr.io/nagarajan13172'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main',
            credentialsId: 'GITHUB_SECRET',
            url: "https://github.com/Nagarajan13172/brilliant-architect-space.git"
      }
    }


    stage('Build Docker Image') {
      steps {
        script {
          def tag = params.ENV_TARGET
          sh """
            docker build -t $DOCKER_REGISTRY/$DOCKER_IMAGE:latest .
          """
        }
      }
    }

    stage('RUN Docker Image') {
      steps {
        script {
          def tag = params.ENV_TARGET
          sh """
            docker compose up -d
          """
        }
      }
    }
  }

  post {
    always {
      echo "Pipeline finished at ${new Date().format("yyyy-MM-dd HH:mm:ss")}"
    }
    success {
      echo "✅ Build succeeded! Image pushed: ${DOCKER_REGISTRY}/${DOCKER_IMAGE}:latest"
    }
    failure {
      echo "❌ Build failed!"
    }
  }
}