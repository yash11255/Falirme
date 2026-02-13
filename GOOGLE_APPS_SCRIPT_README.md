# Google Sheets Integration for FlareMe Waitlist

Follow these steps to connect your "Launching Soon" website directly to Google Sheets for automatic lead collection.

## Step 1: Create a Google Sheet
1. Create a new Google Sheet.
2. Name the first row with these columns:
   - `timestamp`
   - `name`
   - `brand`
   - `website`
   - `volume`
   - `email`
   - `phone`

## Step 2: Create the Apps Script
1. In your Google Sheet, go to **Extensions** > **Apps Script**.
2. Replace the existing code with the following:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.name,
    data.brand,
    data.website,
    data.volume,
    data.email,
    data.phone
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ "success": true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Save** and name it `FlareMeWaitlist`.

## Step 3: Deploy as Web App
1. Click **Deploy** > **New deployment**.
2. Select **Web app** as the type.
3. Change "Who has access" to **Anyone**. (This is necessary for the API to call it).
4. Click **Deploy**.
5. Copy the **Web app URL**.

## Step 4: Add the URL to your project
1. Create a `.env.local` file in your root directory if it doesn't exist.
2. Add the URL like this:
   ```
   GOOGLE_SCRIPT_URL=your_web_app_url_here
   ```

Now, every time someone joins the waitlist, their details will automatically appear in your Google Sheet!
