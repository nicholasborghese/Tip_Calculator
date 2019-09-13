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

            document.getElementById("totalTip").style.display = "block";
            document.getElementById("tip").innerHTML = total;
            document.getElementById("totalWithTip").style.display = "block";
            document.getElementById("totalwithtip").innerHTML = totalwithtip;
        }
    }
});
