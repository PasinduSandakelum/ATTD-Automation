package com.sgic.automation.atdd.demo.tests;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@CucumberOptions(features = {"src/test/resources/features/"},
    glue = {"com.sgic.automation.atdd.demo.steps"}, tags = {"login"})
@RunWith(Cucumber.class)
public class TestRunner {

}
