import Component from '@ember/component';

export default Component.extend({
    actions: {
        calculateTip() {
            var billAmount = document.getElementById("billAmount").value;
            var percentage = document.getElementById("percentage").value;

            var total = billAmount * percentage;
            total = total.toFixed(2);

            var totalwithtip = parseFloat(total) + parseFloat(billAmount);
            totalwithtip = totalwithtip.toFixed(2);
            
            document.getElementById("totals").style.display = "flex";
            document.getElementById("tip").innerHTML = total;
            document.getElementById("totalwithtip").innerHTML = totalwithtip;
        }
    }
});
