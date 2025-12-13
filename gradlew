#!/bin/sh

DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'
APP_NAME="Gradle"
APP_BASE_NAME=`basename "$0"`

GRADLE_USER_HOME=${GRADLE_USER_HOME:-$HOME/.gradle}

exec "$JAVA_HOME/bin/java" $DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS "\"-Dorg.gradle.appname=$APP_BASE_NAME\"" -classpath "$GRADLE_USER_HOME/wrapper/dists/gradle-8.4-bin/*/gradle-8.4/lib/gradle-launcher-8.4.jar" org.gradle.launcher.GradleMain "$@"