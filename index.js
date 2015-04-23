boxite.compile({

header: {
  title: "Boxite",
  image: "https://www.dropbox.com/s/2pz926ljzz32b9m/IMG_4893.JPG?dl=1",
},

content: [

"# **put your project online**",

"Boxite lets your team build a *portfolio, process, or documentation site* as part of your work, instead of as a final (and often-skipped) step.",

"Boxite *separates a website's hosting and editing* so that you can host anywhere, make changes in a shared folder (such as Dropbox), and see your site instantly update.",

"This site is written in Boxite, so changing it is *[as easy as editing this file](https://raw.githubusercontent.com/bqpd/boxite/gh-pages/index.js)*.",

"Boxite is *free and open source software*. <br> [See the code](https://github.com/bqpd/boxite/), or read on for install instructions.",


"# Features",

"* Needs no new accounts\n"+
"* Edit without coding\n"+
"* Upload and caption new photos easily\n"+
"* [Markdown](http://daringfireball.net/projects/markdown/syntax) support\n"+
"* Mobile-friendly design\n"+
"* Compiles to a static website (see below)",


"# Coming attractions",

"* Nav links (in the header and \"back to top\")\n"+
"* Simple slideshow template\n"+
"* Template for listing team members\n"+
"  * With homepage links this could form a distributed project network\n"+
"* Smart diffs and merges between multiple *index.js* files from different sources",


"# Example sites",

{ image: "https://www.dropbox.com/sh/vtwtm7iefplbx21/AADWhjzxWO99Lc6ujWCwD-E3a/header.jpg?dl=1",
  caption: '[Practical Education Network](http://pen.atu.red)',
  place: "Ghana",
  date: "2009 to present"
},
{ image: "https://www.dropbox.com/sh/y2qcnz62r75jei5/AACy4ASq9t9VaQs0Wwg9Zhw8a/draft.jpg?dl=1",
  overlay: "white gradient",
  caption: '[Puffin Joystick](http://puff.atu.red)',
  place: "MIT",
  date: "2015 to present"
},


"# Installation into Dropbox",

"## I. Create folders",

"1. Create a new folder in your Dropbox \"Public\" folder. We'll call this your \"hosting\" folder.\n"+
"  * If you don't have a \"Public\" folder, you can use [KISSr](https://www.kissr.com/) to create a single domain for free.\n"+
"    * [Github Pages](https://pages.github.com/) is better and cheaper for custom domains and multiple sites; see \"other installations\", below.\n"+
"  * Your hosting folder will then be at *Dropbox > Apps > KISSr > (your chosen domain name)*.\n"+
"  * Delete the default files provided by KISSr.\n"+
"2. [Download Boxite](https://github.com/bqpd/boxite/archive/gh-pages.zip) and place its contents (*index.html*, *index.js*, and a folder named *boxite*) into the hosting folder.\n"+
"3. Elsewhere in Dropbox, create a folder that's [shared with your team](https://www.dropbox.com/help/19?path=sharing_files_and_folders). We'll call this the \"shared\" folder.",

"## II. Move files ",

"1. Move *index.js* from the hosting folder to the shared folder.\n"+
"2. Copy the [sharable link](https://www.dropbox.com/en/help/167) for *index.js* to your clipboard.\n"+
"3. Open the hosting folder's *index.html* in a text-editor. Select *\"index.js\"* on line 13 and replace it with the link from the previous step (keeping the quote marks).\n"+
"4. The tags starting with *\"<meta name=\"* control previews on facebook and twitter: delete them, or edit them to create your own preview. (see compiling, below)",

"## III. View and edit your website",

"1. Open the [public link](https://www.dropbox.com/en/help/16) to your hosting folder in the web browser.\n"+
"2. Edit the *index.js* file in the shared folder.\n"+
"3. Reload the page; your changes should appear immediately.",


"# Other installations",

"The above steps use Dropbox for both hosting and editing the site, while the [project page for boxite](http://box.obio.me) uses [Github Pages](https://pages.github.com/) for hosting. You can use any group- and web-accessible location for editing and any web-accessible location for hosting.",


"# Compiling to a static site",

"To make your Boxite page load faster, you can \"compile\" it to a completely static site. This also creates automatic Twitter and Facebook previews.",

"To compile, go to your website and open your browser's [developer console](http://wickedlysmart.com/hfjsconsole/). Right-click on the *html* element, select *Copy* or *Copy Outer HTML* (see screenshots below), and then save that as your *index.html*.",

{ image: "https://www.dropbox.com/s/b5g15yzhkru94pw/chrom_compile.png?dl=1",
  caption: 'Chrome',
  overlay: "white gradient"
},
{ image: "https://www.dropbox.com/s/bbt0diooog9fx01/ff_compile.png?dl=1",
  caption: 'Firefox',
},

]})
