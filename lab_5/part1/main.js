// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('#comment-wrapper');
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');


commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

// functionality for showing/hiding the comments section
showHideBtn.addEventListener('click', toggleComments);
showHideBtn.addEventListener('keydown', function (e) {
  if (e.key === ' ' || e.key === 'Enter') {
    // Prevent double-activation in some browsers
    e.preventDefault();
    toggleComments();
  }
});

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form
function toggleComments() {
  const expanded = showHideBtn.getAttribute('aria-expanded') === 'true';
  if (!expanded) {
    showHideBtn.textContent = 'Hide comments';
    showHideBtn.setAttribute('aria-expanded', 'true');
    commentWrapper.style.display = 'block';
    nameField.focus();
  } else {
    showHideBtn.textContent = 'Show comments';
    showHideBtn.setAttribute('aria-expanded', 'false');
    commentWrapper.style.display = 'none';
    // return focus to the toggle button
    showHideBtn.focus();
  }
}

showHideBtn.addEventListener('click', toggleComments);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    // For the assignment an alert is acceptable; for production use inline error with role="alert"
    alert('Please enter both your name and a comment.');
    if (!nameValue) nameField.focus();
    else commentField.focus();
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;
  namePara.style.fontWeight = 'bold';
  
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  nameField.value = '';
  commentField.value = '';
  nameField.focus();
});
