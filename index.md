boxite
------

# collaborative project documentation

Boxite separates the editing and hosting of your group's website, while keeping you in complete control of both.

Edit your site wherever it's convenient to collaborate, such as  on Dropbox, on Github, or in an MIT group locker; the hosted version (which can be hosted anywhere) will update as fast as you edit.

This site is written in boxite; changing it as as easy as [editing this file]().

# Features

  * Requires no new website accounts
  * Edit without coding
  * Upload and caption new photos easily
  * [Markdown] support in text blocks
  * Mobile-friendly design
  * Compiles to a static website (see below)

# Coming attractions

  * Nav links (header and "back to top")
  * Complete [Markdown]() support
  * Slideshows
  * Formats for listing team members
  * Smart / double-buffered updates

# Example Sites

{PEN}

{Puffin}

# Installation into Dropbox

1. Create a new folder in your Dropbox's "Public" folder. We'll call this your "hosting" folder.
2. [Download boxite]() and place the `boxite` folder into the hosting folder.
3. Elsewhere in your Dropbox folder, create a folder that's [shared with your team](). We'll call this the "shared" folder.
4. Move the `index.js` file from the hosting folder into the shared folder.
5. Copy the [sharable URL]() for this `index.js` file to your clipboard.
6. Open the `index.html` file in the hosting folder. Select "REPLACE_ME" on line 12 and paste in the sharable URL from step 5.
7. Open the [public link]() to your hosting folder in the web browser.
8. Try editing the `index.js` file and reloading the page; your changes should appear immediately.


# Other installations

The above steps use Dropbox for both hosting and editing the site, while the project page for boxite uses Github for both. You can use any group- and web-accessible location for editing and any web-accessible location for hosting.


# Compiling to a static site

To make your Boxite page load faster, you can "compile" it. To do this, open your website in a browser and open the development console. Right-click on the "HTML" element, select "edit as HTML", and then select all the text. Save it over your current "index.html" file.

{Firefox console / key command}
{Chrome console / key command}
