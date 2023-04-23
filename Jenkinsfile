pipeline {
    agent any
    
    stages {
        stage('Deploy Dev environment') {
            steps {
                sh '''
                ssh -i /var/jenkins_home/.ssh/id_rsa.metadap -o StrictHostkeyChecking=no root@66.42.59.39 "cd Projects/metadap_landing_page; \
                git checkout main; \
                git pull; \
                docker-compose down; \
                docker-compose up -d --build"
                '''
            }
        }
        stage('Deploy Prod environment') {
            options {
                timeout(time: 1, unit: 'HOURS') 
            }
            input{
                message "Shall we deploy to Production?"
                ok "Yes Please"
            }
            steps {
                sh '''
                    ssh -i /var/jenkins_home/.ssh/id_rsa.metadap -o StrictHostkeyChecking=no root@45.76.162.9 "cd Projects/metadap_landing_page; \
                    git checkout main; \
                    git pull; \
                    docker-compose down; \
                    docker-compose up -d --build"
                    '''
                    }
            }
    }
}
