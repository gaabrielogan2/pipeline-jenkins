pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                echo 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'npm run mocha'
            }
        }
        stage('Deploy') {
            steps {
                echo "publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'Ebac Reporter', reportTitles: '', useWrapperFileDirectly: true])"
            }
        }
    }
}
