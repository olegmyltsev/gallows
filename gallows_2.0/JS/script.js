
    var countries = [
        "англия",
        "бразилия",
        "китай",
        "россия",
        "франция",
        "германия",
        "япония",
        "сша",

    ];


    var letters = [
        'а',
        'б',
        'в',
        'г',
        'д',
        'е',
        'ё',
        'ж',
        'з',
        'и',
        'й',
        'к',
        'л',
        'м',
        'н',
        'о',
        'п',
        'р',
        'с',
        'т',
        'у',
        'ф',
        'х',
        'ц',
        'ч',
        'ш',
        'щ',
        'ъ',
        'ы',
        'ь',
        'э',
        'ю',
        'я',
    ]

    var letter = letters[1]
    $("#letter_1").click(function () {
        letter = letters[0]
        $("#letter_1").attr('disabled', true)
    })
    $("#letter_2").click(function () {
        letter = letters[1]
        $("#letter_2").attr('disabled', true)
    })
    $("#letter_3").click(function () {
        letter = letters[2]
        $("#letter_3").attr('disabled', true)
    })
    $("#letter_4").click(function () {
        letter = letters[3]
        $("#letter_4").attr('disabled', true)
    })
    $("#letter_5").click(function () {
        letter = letters[4]
        $("#letter_5").attr('disabled', true)
    })
    $("#letter_6").click(function () {
        letter = letters[5]
        $("#letter_6").attr('disabled', true)
    })
    $("#letter_7").click(function () {
        letter = letters[6]
        $("#letter_7").attr('disabled', true)
    })
    $("#letter_8").click(function () {
        letter = letters[7]
        $("#letter_8").attr('disabled', true)
    })
    $("#letter_9").click(function () {
        letter = letters[8]
        $("#letter_9").attr('disabled', true)
    })
    $("#letter_10").click(function () {
        letter = letters[9]
        $("#letter_10").attr('disabled', true)
    })
    $("#letter_11").click(function () {
        letter = letters[10]
        $("#letter_11").attr('disabled', true)
    })
    $("#letter_12").click(function () {
        letter = letters[11]
        $("#letter_12").attr('disabled', true)
    })
    $("#letter_13").click(function () {
        letter = letters[12]
        $("#letter_13").attr('disabled', true)
    })
    $("#letter_14").click(function () {
        letter = letters[13]
        $("#letter_14").attr('disabled', true)
    })
    $("#letter_15").click(function () {
        letter = letters[14]
        $("#letter_15").attr('disabled', true)
    })
    $("#letter_16").click(function () {
        letter = letters[15]
        $("#letter_16").attr('disabled', true)
    })
    $("#letter_17").click(function () {
        letter = letters[16]
        $("#letter_17").attr('disabled', true)
    })
    $("#letter_18").click(function () {
        letter = letters[17]
        $("#letter_18").attr('disabled', true)
    })
    $("#letter_19").click(function () {
        letter = letters[18]
        $("#letter_19").attr('disabled', true)
    })
    $("#letter_20").click(function () {
        letter = letters[19]
        $("#letter_20").attr('disabled', true)
    })
    $("#letter_21").click(function () {
        letter = letters[20]
        $("#letter_21").attr('disabled', true)
    })
    $("#letter_22").click(function () {
        letter = letters[21]
        $("#letter_22").attr('disabled', true)
    })
    $("#letter_23").click(function () {
        letter = letters[22]
        $("#letter_23").attr('disabled', true)
    })
    $("#letter_24").click(function () {
        letter = letters[23]
        $("#letter_24").attr('disabled', true)
    })
    $("#letter_25").click(function () {
        letter = letters[24]
        $("#letter_25").attr('disabled', true)
    })
    $("#letter_26").click(function () {
        letter = letters[25]
        $("#letter_26").attr('disabled', true)
    })
    $("#letter_27").click(function () {
        letter = letters[26]
        $("#letter_27").attr('disabled', true)
    })
    $("#letter_28").click(function () {
        letter = letters[27]
        $("#letter_28").attr('disabled', true)
    })
    $("#letter_29").click(function () {
        letter = letters[28]
        $("#letter_29").attr('disabled', true)
    })
    $("#letter_30").click(function () {
        letter = letters[29]
        $("#letter_30").attr('disabled', true)
    })
    $("#letter_31").click(function () {
        letter = letters[30]
        $("#letter_31").attr('disabled', true)
    })
    $("#letter_32").click(function () {
        letter = letters[31]
        $("#letter_32").attr('disabled', true)
    })
    $("#letter_33").click(function () {
        letter = letters[32]
        $("#letter_33").attr('disabled', true)

    })


    var errors = 10
    var emptyArray = []
    var randomWord = countries[Math.floor(Math.random() * countries.length)]
    var lettersLeft = randomWord.length
    for (let index = 0; index < randomWord.length; index++) {
        emptyArray[index] = "_"
        $(".letters").text(emptyArray.join(" "))
    }

    function cycle() {
        var correct = false

        for (let index = 0; index < randomWord.length; index++) {

            if (letter === randomWord[index]) {
                emptyArray[index] = letter
                lettersLeft--
                correct = true
            }

        }

        if (correct === false && lettersLeft > 0) {
            errors--
            gallows()
        }

        if (errors > 0) { $(".letters").text(emptyArray.join(" ")) }
        else { $(".letters").text(randomWord) }

        if (lettersLeft === 0 && errors > 0) {
            $(".game_over").text("Вы выиграли!").css("color", "green")
        }

    }

    $(".btn").click(function () {
        cycle()

    })


    //gallows
    function gallows() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");

        $('.attempts_left').text(errors)

        if (errors <= 0) {
            $(".btn").attr('disabled', true)
            $(".game_over").text("Вы проиграли!")

        }


        if (errors < 10) {
            ctx.beginPath();
            ctx.lineWidth = 10;
            ctx.moveTo(30, 0);
            ctx.lineTo(30, 250);
            ctx.stroke();
        }

        if (errors < 9) {
            ctx.beginPath();
            ctx.moveTo(0, 245);
            ctx.lineTo(180, 245);
            ctx.stroke();
        }

        if (errors < 8) {
            ctx.beginPath();
            ctx.moveTo(0, 5);
            ctx.lineTo(210, 5);
            ctx.stroke();
        }

        if (errors < 7) {
            ctx.beginPath();
            ctx.moveTo(90, 5);
            ctx.lineTo(30, 70)
            ctx.stroke();
        }

        if (errors < 6) {
            ctx.beginPath();
            ctx.moveTo(180, 0);
            ctx.lineWidth = 3;
            ctx.lineTo(180, 55);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.arc(180, 75, 20, Math.PI * 2, false);
            ctx.stroke();

        }


        if (errors < 5) {
            ctx.moveTo(150, 140);
            ctx.lineTo(180, 110);
            ctx.stroke();
        }

        if (errors < 4) {
            ctx.lineTo(210, 140);
            ctx.stroke();
        }

        if (errors < 3) {
            ctx.moveTo(180, 95);
            ctx.lineTo(180, 140);
            ctx.stroke();
        }

        if (errors < 2) {
            ctx.moveTo(180, 140);
            ctx.lineTo(200, 190);
            ctx.stroke();
        }

        if (errors < 1) {
            ctx.moveTo(180, 140);
            ctx.lineTo(160, 190);
            ctx.stroke();

        }
    }
