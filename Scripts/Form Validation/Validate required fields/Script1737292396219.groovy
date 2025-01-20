import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

WebUI.setText(findTestObject('Form Validation/input_Username_username'), 'Admin')

WebUI.setEncryptedText(findTestObject('Form Validation/input_Password_password'), 'hUKwJTbofgPU9eVlw/CnDQ==')

WebUI.click(findTestObject('Form Validation/button_Login'))

WebUI.click(findTestObject('Form Validation/a_PIM'))

WebUI.click(findTestObject('Form Validation/li_Add Employee'))

WebUI.click(findTestObject('Form Validation/div_Employee Id'))

WebUI.setText(findTestObject('Form Validation/input_Employee Id_oxd-input oxd-input--focus'), '0361')

WebUI.click(findTestObject('Form Validation/button_Save'))

WebUI.click(findTestObject('Form Validation/div_Employee Full NameRequiredRequired'))

WebUI.click(findTestObject('Form Validation/div_Employee IdEmployee Id already exists'))

WebUI.delay(2)

WebUI.closeBrowser()

