pipeline{

	agent any
	
	 environment {
        // Nama image yang akan dibuat dan didorong ke registry
        IMAGE_NAME = 'rezjazalva/calculator_app'
        // Versi dari image
        IMAGE_TAG = "latest"
        // Docker registry URL (biarkan kosong untuk Docker Hub)
        DOCKER_REGISTRY_URL = ''
    }
	
	stages {
	    
	    stage('gitclone') {
			steps {
				git branch: 'main', credentialsId: 'github-rezja', url: 'https://github.com/rezjazalva/calculatorApp.git'
			}
		}
		
		stage('Build') {

			steps {
				bat 'docker build -t rezjazalva/calculator_app:latest .'
			}
		}


		stage('Push') {

			steps {
			    script{
			     withCredentials([string(credentialsId: 'docker_pwd', variable: 'docker_now')]) {
                    		sh "echo docker_pwd | docker login -u rezjazalva --password-stdin"
			        sh 'docker push rezjazalva/calculator_app'
			        
			    }
				
			    }
			
			}
		}
	}
}
