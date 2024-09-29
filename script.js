document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
  
    
    function populateYears() {
      const currentYear = new Date().getFullYear();
      for (let i = currentYear; i <= currentYear + 5; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
      }
    }
  
   
    function populateDays() {
      const selectedYear = parseInt(yearSelect.value);
      const selectedMonth = monthSelect.value;
  
      const daysInMonth = new Date(
        selectedYear,
        new Date(Date.parse(`${selectedMonth} 1, ${selectedYear}`)).getMonth() + 1,
        0
      ).getDate();
  
      daySelect.innerHTML = ""; 
      for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
      }
    }
  
    
    monthSelect.addEventListener('change', populateDays);
    yearSelect.addEventListener('change', populateDays);
  
    
    populateYears();
    populateDays();
  
    
    document.getElementById("taskForm").addEventListener("submit", function (e) {
      e.preventDefault();
  
      const taskData = {
        year: yearSelect.value,
        month: monthSelect.value,
        day: daySelect.value,
        type: document.getElementById("type").value,
        description: document.getElementById("description").value,
      };
  
      console.log("Task saved:", taskData);
      alert("Task registered successfully!");
  
      
      this.reset();
      populateDays();
    });
  });
  