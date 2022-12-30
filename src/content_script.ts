// @ts-ignore
import Box from './Box.svelte';

setTimeout(() => {
  document.documentElement.classList.add('boxgpt-active');

  const div$ = document.createElement('div');
  div$.classList.add('boxgpt-container');

  document.documentElement.appendChild(div$);
  new Box({target: div$});

  // Add button behavior
  const button = document.getElementById("my-button");
  button.addEventListener("click", function() {
    const bodyText = document.body.textContent;
    const summary = `please summarize this\n${bodyText}`;
  });
}, 10);
