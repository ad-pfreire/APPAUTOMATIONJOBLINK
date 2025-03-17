describe(' Login', () => {
    it(' Log in with existing account', async () => {
        // Find Log In button in the spalsh screen
        const loginButton = await $('~Log In');

        await driver.pause(5000);
        
        //CLick on Log In button
        await loginButton.click();
        
        //Assert login Screen Text
        await expect($('//*[@text="Job Link Log In"]')).toBeDisplayed();
        
        // Fill up the  user crecentials fields/ USERNAME
        //await $('//android.widget.EditText[@text="Username or Email"]]').click(); VEO QUE NO FUE NECESARIO HACER CLICK PRIMERO
        await $('//android.widget.EditText[@text="Username or Email"]').addValue("ryann");

        // Fill up the  user crecentials fields/ PASSWORD
       // await $('//android.widget.EditText[@text="Password"]').click();
        await $('//android.widget.EditText[@text="Password"]').addValue("123456");

        //Click on Login button
        await $('~Log In').click();

         // sera d epoenr un if aqui para los caso que salhga el limit exeed??? (Para nuevos usuaruos)
        await $('~LOG IN ANYWAY').click();

        // validate that the login button is grayed out ?????
    
        await expect($('//*[@text="Measurements"]')).toBeDisplayed();

        await driver.pause(2000);

        // validate the notification screen??? PENDIENTE PORQUE SOLO PAS CUANDO SE INSTALA LA APP -- PENDIENTE!!!
        // await $('~NEXT').click();
        
        // // allow joblink to send notificationss (ESTE ES UN POP-UP) (CASO DE PRUEBA EN ALLOW)
        // await $('//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]').click();

     // assertion FIELDPIECE 

    });
    
});
 