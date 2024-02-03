pipeline {
    agent any

    stages {
        stage('Setup') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run mocha'
            }
        }
        stage('Deploy') {
            steps {
                sh "publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'Ebac Reporter', reportTitles: '', useWrapperFileDirectly: true])"
            }
        }
    }
}
