pipeline{

	agent any
	
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
			   withCredentials([usernameColonPassword(credentialsId: 'docker-path', variable: 'docker-now')]) {

			    bat 'docker push rezjazalva/calculator_app'
			        
			    }
				
			}
		}
	}
}