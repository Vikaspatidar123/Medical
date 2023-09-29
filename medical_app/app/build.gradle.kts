/*
 * This file was generated by the Gradle 'init' task.
 */

plugins {
    id("medical_app.java-application-conventions")
}

dependencies {
    implementation("org.apache.commons:commons-text")
    implementation(project(":utilities"))
}

application {
    // Define the main class for the application.
    mainClass.set("medical_app.app.App")
}