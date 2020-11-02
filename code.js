$(document).ready(
    function () {
        //event handlers
        $("#calculateBloodAlcoholLevel").click(totalBAC);

        //other functions
        function  totalBAC()
        {
            //get all input from boxes and parse to number data type

            var beers = $("#numberOfBeers").val();
            beers = parseFloat(beers);

            var wine = $("#glassesOfWine").val();
            wine = parseFloat(wine);

            var shots = $("#numberOfShots").val();
            shots = parseFloat(shots);

            var weight = $("#weightInPounds").val();
            weight = parseFloat(weight);

            var hours = $("#hoursSinceFirstSip").val();
            hours = parseFloat(hours);

            //calculate how much alcohol user had and their BAC

            var alOzBeer = beers * 0.54;

            var alOzWine = wine * 0.6;

            var alOzShots = shots * 0.6;

            var alcoholAbsorption = (alOzBeer + alOzWine + alOzShots) * 7.5;

            var bac = alcoholAbsorption / weight;

            var totalBloodAlcoholLevel = bac - (hours * 0.015);

            //put output into paragraphs

            $("#amountOfBeerOutput").text(`${alOzBeer.toFixed(2)} ounces of alcohol`);

            $("#amountOfWineOutput").text(`${alOzWine.toFixed(2)} ounces of alcohol`);

            $("#amountOfShotsOutput").text(`${alOzShots.toFixed(2)} ounces of alcohol`);

            $("#totalBAC").text(`Your Blood Alcohol Content (BAC) is ${totalBloodAlcoholLevel.toFixed(3)}%`)

            $(".output").show();
        }
    }
);