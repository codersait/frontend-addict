document object is created by the browser to model html page.
each elements is considered a node in DOM.html -> root node
text inside the element is text node 
* Query the DOM
document.querySelector() -- used any parent element not only document
document.querySelectorAll() -- used any parent element not only document
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
* Traverse the DOM
parent.children -- down to tree
child.parentElement -- up to tree
child.nextElementSibling
child.previousElementSibling
* Content
innerText -- visible text
textContent -- all text even spaces
innerHTML
* Append
+= 
append
* Attributes
getAttribute('src')
setAttribute('src','source path')
* Styles
style property -- inline style
for removing style set it to '';
classList
classList.add()
classList.remove()
classList.toggle()
* Creating and Removing 
element.remove()
document.createElement('tag name')
parent.append()
parent.prepend()

