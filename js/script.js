/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/***

 Added my two global variables to store all students in a list
 and to store the number of students I want per page.

***/
const studentList = document.querySelectorAll('li');
const studentsPerPage = 10;
/***

  Created the showPage function to create pages and to hide excess students so
  there wouldn't be more than 10 students per page.

***/
const showPage = (list, page) => {
    let startIndex = (page * studentsPerPage) - studentsPerPage;
    let endIndex = page * studentsPerPage;
    for (let i = 0; i < list.length; i += 1) {
	if (i >= startIndex && i < endIndex) {
	    list[i].style.display = 'block';
	} else {
	    list[i].style.display = 'none';
	}
     }
}
/***

  Created the appendPageLinks function to create links for student pages.

  Used Math.ceil to keep 10 students per page.

  Created variables to add functionality to buttons
  and appended the a elements to the li elements and appended the
  li elements to the ul.

  Added addEventListener so users actions can be displayed properly.

  Called the showPage function and passed in the studetnList variable and the
  number 1 for the first page when I call it.

  Called the appendPageLinks function after creating and appending
  pagination link elements.

***/
const appendPageLinks = (list) => {
    let pages = Math.ceil(list.length / 10)
    let div = document.createElement('div');
    div.className = 'pagination';
    document.querySelector(".page").appendChild(div);
    const ul = document.createElement('ul');
    div.appendChild(ul);
    for (let i = 1; i <= pages; i += 1) {
	const li = document.createElement('LI');
	const a = document.createElement('A');
	a.textContent = i;
	a.href = '#';
	ul.appendChild(li);
	li.appendChild(a);
	document.addEventListener('click', (e) => {
		if (e.target.tagName === 'A') {
		let link = event.target;
		let number = event.target.textContent;
		showPage(studentList, number);
		let a = document.querySelectorAll('a');
		for (let i = 0; i < a.length; i += 1) {
		   a[i].className = 'none'
		};
		link.className = 'active'
       	    }
         });
      }
}
showPage(studentList, 1);
appendPageLinks(studentList);
