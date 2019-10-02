let kranthi = {
    day:"monday",
    meetings:0,
    meetdone:0,
    addmeeting : function (num) {
        this.meetings = this.meetings + num
    },
    print:function () {
        console.log(this)
    },
    reset:function () {
        this.meetings = 0
    }

};

kranthi.addmeeting(10);
kranthi.reset();
kranthi.print();