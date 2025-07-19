let candleCount = 0;

document.querySelector('.cake').addEventListener('click', () => {
  candleCount++;
  document.getElementById('candleCount').textContent = candleCount;
});
