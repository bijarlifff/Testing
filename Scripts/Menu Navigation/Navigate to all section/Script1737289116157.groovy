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

WebUI.setText(findTestObject('Object Repository/Menu Navigation/input_Username_username'), 'Admin')

WebUI.setEncryptedText(findTestObject('Object Repository/Menu Navigation/input_Password_password'), 'hUKwJTbofgPU9eVlw/CnDQ==')

WebUI.click(findTestObject('Object Repository/Menu Navigation/button_Login'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Admin'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Admin'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_PIM'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_PIM'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Leave'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Leave'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Time'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Time'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Recruitment'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Recruitment'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_My Info'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_PIM'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Performance'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Performance'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Dashboard'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Dashboard'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Directory'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Directory'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Maintenance'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Administrator Access'))

WebUI.setEncryptedText(findTestObject('Object Repository/Menu Navigation/input_Password_password_1'), 'hUKwJTbofgPU9eVlw/CnDQ==')

WebUI.click(findTestObject('Object Repository/Menu Navigation/button_Confirm'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Maintenance'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Claim'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Claim'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.click(findTestObject('Object Repository/Menu Navigation/a_Buzz'))

WebUI.click(findTestObject('Object Repository/Menu Navigation/h6_Buzz'))

WebUI.delay(1)

WebUI.scrollToElement(findTestObject('Menu Navigation/div_bottom_info'), 0)

WebUI.delay(1)

WebUI.closeBrowser()

