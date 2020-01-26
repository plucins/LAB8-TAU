
describe("check validation of form field ", function () {

  beforeEach(function () {
    var fixture = '<div id="test"><title>TAU LAB 8</title>' +
        '<form>' +
        'First name:<br>' +
        ' <input class="test" id="firstName" type="text" name="firstname">' +
        '</br>' +
        '<p> Last name:</p>' +
        '<input class="test" id="lastname"  type="text" name="lastname">' +
        '<br><br>' +
        '</form> </div>';

    document.body.insertAdjacentHTML(
        'afterbegin',
        fixture);
});

afterEach(function() {
  document.body.removeChild(document.getElementById('test'));
});

    it("Should detect failed vailation status", function () {
      //given
       document.getElementById('firstName').value = "janek";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#firstName').keyup();

       //then
        expect(document.getElementById('firstName').classList).toContain("invalid");
        expect(document.getElementById('firstName').style.backgroundColor).toBe("red");
    });

    it("Should detect positive vailation status", function () {
      //given
       document.getElementById('firstName').value = "Janek";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#firstName').keyup();
        //then
        expect(document.getElementById('firstName').classList).toContain("valid");
        expect(document.getElementById('firstName').style.backgroundColor).toBe("green");
    });

    it("Should detect both vailation status, one valid one invalid", function () {
      //given
       document.getElementById('firstName').value = "Janek";
       document.getElementById('lastname').value = "jankowski";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#firstName').keyup();
       $('#lastname').keyup();

       //then
        expect(document.getElementById('firstName').classList).toContain("valid");
        expect(document.getElementById('firstName').style.backgroundColor).toBe("green");

        expect(document.getElementById('lastname').classList).toContain("invalid");
        expect(document.getElementById('lastname').style.backgroundColor).toBe("red");
    });
    
    it("Should detect both vailation status both invalid", function () {
      //given
       document.getElementById('firstName').value = "janek";
       document.getElementById('lastname').value = "jankowski";

       //when 
       $('.test').validate(/^[A-Z]/).mark();
       $('#firstName').keyup();
       $('#lastname').keyup();

       //then
        expect(document.getElementById('firstName').classList).toContain("invalid");
        expect(document.getElementById('firstName').style.backgroundColor).toBe("red");

        expect(document.getElementById('lastname').classList).toContain("invalid");
        expect(document.getElementById('lastname').style.backgroundColor).toBe("red");
    });
});
