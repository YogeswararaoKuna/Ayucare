import { useState } from "react";

/* ================= YOGA DATA ================= */

const yogaPlan = [
  {
    day: "Day 1",
    poses: [
      {
        name: "Tadasana",
        time: "5 mins",
        img: "https://www.yogicwayoflife.com/wp-content/uploads/2014/12/Tadasana_Palm_Tree_Pose_Yoga_Asana_Standing_Pose.jpg"
      },
      {
        name: "Vrikshasana",
        time: "5 mins",
        img: "https://www.yogicwayoflife.com/wp-content/uploads/2016/10/Vrikshasana-_Tree_Pose_Yoga_Asana.jpg"
      }
    ]
  },
  {
    day: "Day 2",
    poses: [
      {
        name: "Bhujangasana",
        time: "5 mins",
        img: "data:image/jpeg;base64,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"
      },
      {
        name: "Setu Bandhasana",
        time: "5 mins",
        img: "https://www.yogaclassplan.com/wp-content/uploads/2021/06/bridgepose-1.png"
      }
    ]
  },
  {
    day: "Day 3",
    poses: [
      {
        name: "Trikonasana",
        time: "5 mins",
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUQEBIQFhIXGBISFRYPDxAPEhMXFhIXFxYYFxUYHSggGBolGxgTIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLS8tNS0tLS0tLSstLS0tLzUtLS0tLS0tLSstKy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcCAwj/xABAEAACAQIDBQYCBggFBQAAAAAAAQIDEQQFIQYSMUFRE2FxgZHBIqEyQlJysdEHFCMzorLC4WKCkvDxFSQ0Q3P/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAQIG/8QAMxEBAAICAQMBBgUDAwUAAAAAAAECAxEEEiExQQUiMlFhgRNCcZGxFMHRI6HwJDNDUmL/2gAMAwEAAhEDEQA/AO4gAAAAAAAANLOK8oUt+LtaVO/g6kU/lc8ZJmK7S4Kxa+p+U/wr2FxzhJNtvdq41tX47tNSX4lat9T97L18XVGvnFP5WuhU3oxl1SfqrluJ3G2baNTMPZ1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr21eOcIOk4fDOPwyT4SUk2mvCxXz31GvmvcPFFrdUT3j+FPjWk5bqbu96/jU+GXqinuWp0xEf8APR0+nGyS6JL0RqQ+emdzt6DgAAAAAAAAAAAAAAAAAAAAAAAAAAAABo5zgY1aMoy4pOUX0aWjPGSkWrpNgyzjvEwoWVQTr00+c4X/ANSM/H3tDazTrHb9JdLNN8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTNau7QqS6Ql+Gh4yTqsykwxvJWPq5/lsrVqb6Th/MjPpOrQ3MsbpaPpLpZpvnwAAAAAAAAAAAAAAAAAAAAAAAAAAAAABE7U1LYWffux9ZIhzz7krPDjeaFDhKzT6NP0KDbmN9nUYSuk+tmar5tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAABB7Yf+N/mj7kHI+Bc4P/d+yjsoNh0zLpXo031hB/wo1KTusPnssavMfWWwengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAidqIXws+7dfpJEOePclZ4c6zQoLM9tumZdG1GmnxUIL+FGpTtWHz2Wd3mfrLYPTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAARm0srYWp4JeskiLN8ErHFjeaqgU43kl1aXqzPhtzOo26ilyNV84yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg9sKlsNb7Uor8X7EHIn3FzgxvLv6KRF2afTUotiY26lF3SZqvm2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFY23qfBTj1cpeit7lXlT2iGh7Pj3rSqTKbUdLyypvUacusIP+FGpSd1h8/ljV7R9ZbJ6RgAAAAAAAAAAAAAAAAAAAAAAAAAAAAFN21qXrQj0hf1k/wAkUuTPvRDW4Ee5M/VXSsvOgbNVN7C0+5OPpJo0cM7pDD5UazWShKrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAFE2tlfFSXSMF8r+5Q5HxtnhRrFH3QxAtrPsnmsIRlSqyjHXei5NJO/FXf+9S5xbTMTVle0KxWYvM/RZ6OLpz+hUpy+5OMvwZa0z4tE+H2DoAAAAAAAAAAAAAAAAAAAAAB5nNJNtpJJttuySXFtgVt7c4NzdOlOVSSTf7OEtzT/G9PM7licdOqxx5jPk/DpP+EVjtpK838L7OPSFr+cnr6WM+2e8+OzZx8PHXz3lHPHVb37Wrf/6T/Mi67fNY/Cp/6x+y3ZBm6/V9/EVIrdk471SSjdWTV2+L1LuHJum7SyuTg1l1SPPyU3PsxVTE1KlOScJOO60tGlFRuvNMsUw4ssdSjl5PK4t+jeo9ImIaH6wz1HExR6Ire0+Tb82v0iDtSeKxEaiFK17Xndp3P1ZVQ7p5b2EzqvT+hVnbo3vr0lc8zSJSVy3jxKR2a27q1IS/WKcG4y3U6V4X05ptlXlWjDaIj1avAxW5NJtM61Ok1La+nbSlPzcUV/6mPkux7Pt6zDeWbSaTUUrpOzu7aENuXb0hF/TxHmXl5jU7vQ8/1WR38CrMcynz3X5COVcnBVtUczi9JJr5onpyqz8XZFbBaPDdi76rgWYnfhAydAAAAAAAAAAAAAOefpdzaUKdLCwbSqb06lucY2Sj4NtvyLPHr3mVPl3mIiqhbO46FOo1PRSSW8+TXXuPHOw2yUia+if2VyaYckxftv1WuMk+GvhqYkxry+oiYnwycdQ2aU3OtGEeNl5avU9x4TUnVdtvHJRjFLlovBIvez5ndvs+e9t61SfXctRVDTfPM9oHXpVAPnicVuQcvTvfIRG3HrZeP7FvrN/hEy/aM/6sR9P8vpfYsawTP/1/aEzGN2l1sjPa0+FuI2cxcBcDFw62cHjHB9Y817omw5pxz9EeTFF/1TkJJpNcGacTExuFGY1OpejrgAAAAAAAAAAAIXM9n6dfEqtUSe7RqUY31s5vWSXW28vM9xeYjUI7Y4tbcuBYvDzpVJ0aitOEnCS707ehfid94Zk1mJ1L3l8m6kY77gnJJyUnGxHm+CZ1vsm40TOWterpiZ870t9fMVC0bpzk1CEFKMm3JpRvb5tmJi498k+Oz6rk8zFgr53PonKmRVqbbdGd3xaW/fzjfQinHePMJo5OO3i0fwq+YYvenpwWnnzNjiYPw6d/MvmPaXKjNl1XxHaP7tbtS1pnbelUGjbPaHNG0fmlRtpcrX8z3UT+zi/7dd7m/wCJr2MTnz/rT+kPqvZEf9LH6z/Kay+LdSF+N03Z34aspT4aOTtWVnIlDQHWLgLgYuBJ5PidezfjH3Rc4uXU9E/ZW5FPzQli+qAAAAAAAAAAAAxKSSbbSS1beiQHAdvNo6WMxLqUaUYxj8KqaqpWS4OS4JdNL258ldx0msd2dlvF53Ct75Ij06P+jTZGnUnTxdWd91RrU6ahaLak0pOXNxnF3iuDSfBq8GXJPiFjBhj4pdcKq65d+lTBRp16VaNl2kZKVla8oNa+LUkvIt8edxMKHLrq0SpKrE+lR6VYaDtxofDEyuvA7AtWRRth4eDfrJv3MDmTvPb/AJ6PsPZteni0+/8AvMym8ojequ5N/K3uVLeFnNPup65GqMXOANhcbdYucNPUJtNNcVqdrbU7gmu41Ky4eqpxUlzRtUvF6xaGZas1nUvoenkAAAAAAAAAAIbbOE3l2KVO7m6NWyjxfwO6Xfa56p8UPGTfROvk/NymXts9JZZkmIrwdSlBOEZKDlKcacFJq9nKTSWnXqup5m8R5eopM+HaNgctdGjQp3Uuyp11OcHem5160Km7Tl9dRUWm1pqu+1XJbczK3irqIhcCNMp36SctValRbk1uzf0Utd6Pf4HLcicMbiN7e8fDryZ6bTrXfsoU9nYW+GpO/wDi3X+CR4j2lf1rCa3sTHr3bT99T/aERj8tqUtWrx+1Hh59C/h5WPL2jtPyZXK9n5eP3t3j5x/f5NHfLKi2cuy+riKipUISnJ8orRd8nwiu9nLWisbl6rWbTqHXcm2MjCjCNacnJJJqm0op211au9fAxsmGL3m0z5l9Fi5dseOtKx4h9K+XUaM7Ut69rNylfyKPI6az01WaZcmSu7PNys9afOcjzMvcQU6t9OaEW2TXT2deQOlwJTIK+sqb++vB6P529S/wr+afdU5VPFvsmC+pgAAAAAAAAAAAouZ/orwNWq6sXXpbzcpQozhuNt3dlKLcfBaEsZbQhnBWZ2tmTZTRwtGOHoQ3acb2V222+Lberb6kczMzuUtaxWNQ3jjoBXdtv3MPvr+WRW5PwwvcD45/RTSk1lm2Lwacp1ZJO1oRv1esn6W9WWuNXvNmdz8moikJ/H5Lhq376hSn3yhHe9eJei9o8SyrUrbzD74LBUqMdyjThCPSEVFeduJyZmfLsViO0GOxPZwvz4Jd5DmyxjrtLjp120rkpXd3xepjzO53LSiNdnls46+E5HiZSRDXcrO6I/EpNbht06l1clrO4Q2rqXu56cYBp9MJX3KsJ8r7r8Jaf3PeK/Rkrb7fu85KdWOYWs22SAAAAAAAAAAAAAAAAK7tt+5h9/8AokVuT8ML/s/45/RTSk1V92Ww+5ho34yvP14fJI0MFdUhicy/Vln6dkuTKzEpJK74LU5M6jckRtW8fi+0nf6q0X5mRny/iW36NPFj6K/VrXIUrzJnJdiGtORFKWH0wGClVlaPDm3wX9yTDhtltqHjLmriruVq/wCnw7LsktOvO/XxNn+np+H0QyfxrdfXKvV6ThJxlxXz70ZV6TSdS0qXi0bh8rnjb281VdNHm3eHazqVpyuvv0oy52s/FaM2+Pk68cWZOenRkmG0TIgAAAAAAAAAAAAAACu7bfuYffX8sityfhhe4Hxz+in04bzUVxbSXm7FOI32aszqNun0aajFRXBJJeSsakRqNPnZnc7ezriFzjHXbpx4L6T6voZ3Kz79yv3XuNh/PP2RNykt6YcjzMuvjUkeJl7iH3y7L5VZaaRX0pey6slwce2afp80ebPGKPqtWFw0acVCCsl6vvfebePHXHXpqyb3ted2fY9vDRzTBdpG6+kuHf3Fbk4fxK9vMJ8GXonv4VtmQ0mLnHUns7irSdF8/ij7r/fQu8HLqZxz+sKvMx7iLx91gNRngAAAAAAAAAAAAAAFR21xScoUlxjecvPRe/qU+TbvFWnwKaibovZ2hv4mmuSbm/8AKrr52IsMbvCzyrdOKXQjRYbRzXGdnCy+k9F3dWVuTm/Dr28ynwYuu3fwrjZk7aTDZzbr5TkeJl6iG/lmUuo96d1T9HLw7u8tcfiTk963aP5QZ+TGP3a+f4WWlTUUoxSSXBI161isahl2tNp3L2enAABB55grftYrT635mbzMH56/de4uX8k/ZDGeusSbTUou0lqmjm5idx5djU9p8LZluMVWmpLjwkujN3BmjLTqj7sjNinHbTaJkQAAAAAAAAAAAAADmmY4ntKs6n2pNrw4L5JGZe3VaZfQYqdFIqmtiaN6s5/Zio/6nf8ApJuNHvTKpz7arFfqt85JJt8Fqy5MxEbllxG51Cq43FOpNyfgl0RiZss5LdTVxY+iunwuRJHiT5a35W1ZyXYhNZZkvCdXjxUOS+918DR4/C/Nk/b/ACpZuX+Wn7pw0VEAAAAHmcU00+D0ZyYiY1LsTrvCpY/DOnNw5cU+q5GFmxzjvNWviv8AiV21yJJpu5Didytu/Vnp58vy8yzwsnRk6fSUHLx9ePfrC1G0ygAAAAAAAAAAAANPN625QqS5qEreLVl87HjJOqzKXDXqyVj6ubmY3142Qwu7h998Zty8lovwb8y/x66pv5sfm36smvk959jP/VHxl7Iq83N/44+7vFxfnn7IMzl5hvkuLsl4s59IdiPWVmyzK40ld6z5t8u5Gzx+NXFG/MsvNyLZO3okC0rgAAAAAAIjaLDXgqi4x0fg/wC/4lHnY91649Fzh31bp+aumS0tMNtaritUNzHeHdRPZdcLV34RmuaT9UfQ479dYt82FevTaa/J9T28gAAAAAAAAAAAg9sKtsNb7Uor0+L2IOROqLnBrvLv5Qp2CwzqVI01xk0vBc36XKVa9UxDVyXilZtPovuPxkaMFGNr2tFdEtLvuLfIzxirqPPoxcWKcttz91alNt3fF6sxpmZnctSI12h4bOPUQ38hwrnV3/qw18+S9y1wsU3ydXpH8q/LydNOn1laTZZQAAAAAAAB5nBNNPg9GcmImNS7EzE7hT8fhnTm4PhxT6rkYObFOO81bWHJGSu2s2RJFm2cq3o7v2W166+5scG+8Wvky+ZXWTfzSpcVAAAAAAAAAAAAVTbeuv2dO+vxTa+S/qKnJnxDS9n1+KzS2blGnv15Wcl8EI87tXb8LW+ZBXJXFE2nz6J+VW15ikePMvpXrSnJyk7tlC95vPVZ6rSKxqHybPG3vTYy/L51nppDnJ+3Vk2Dj2zT28fNFmz1xR38rZhcPGnFQgrJer733m3jx1x16asm95vbql9T28AAAAAAAAADTzPAqrBr6y1i+/p4Mg5GCMtdevomw5px236eqnyTTs+K0fcYM9p1LZjv3TOzFa05Q6pNeX/PyL/s++rTX5qXOr7sWWM1maAAAAAAAAAAGtmWK7KlOpx3VdLq+C+djze3TWZSYqdd4r83O3UlWqNzleT1bfTuRl5Mk/FLdrWKV1WOySpwUVZcClM7ncvM9y93ZavuOee0HjvKay/Im7SrcPsrj5v2NDBwZn3sn7KObma7Y/3T8IJKySSXBLRGnEREahnzMz3l6OuAAAAAAAAAAAArO0mE3ZqouEtH95fmvwMjn4um3XHr/LU4WTdemfT+Glk9XdrwfV7vqrFfi26ctU3Jr1YpXM32KAAAAAAAAAAFJ2rziU5vD07dmmt6SalvOydl4P5ryKWfLuemPDW4fHisfiW8oCnG3DxvzKy9KZyXDzrycFayScpPkvDm+J4ji/iT7vZXz5a4o3K4YHLadJfCry+1LV/2NLDx6YvHn5snLnvk8+G4ToQAAAAAAAAAAAAAEBtlWSoxj9aUlbrZJ39vUrcnXTqV3gVmckz9FNhVkmpJu6aa1fFO5SiIidw1piJjUulYLEqpTjUjwkk/DqjUraLRuHz16TS01l9z08gAAAAAAI3OM3WH3bwlLev9GyStbm/EiyZYp6LGDBOXep1pV832gqVvhinCHNJ/FLxa5dxVyZ5t2jw0MHErj7z3lFUsNOX0ITf3Yt/gRRWZ8QtWvWvmWKtCUXacZRfSUWn8zkxMeStq27xK17G4OcYzqSTSluqN9G0r6+Gpc41ZiJmWZzslbTFY9FlLKgAAAAAAAAAAAAAAxJ6aAc1zTF1qtRyqOzV0ouOkNeCRm3vNp95v4cdMddVasYvn8lY8JdwuOxW/2c009zeTjdc2vit6RLnG3qWVz+nqjXlZCyoAAD//2Q=="
      },
      {
        name: "Padmasana",
        time: "10 mins",
        img: "https://www.shutterstock.com/image-vector/young-woman-meditating-lotus-pose-260nw-2078184310.jpg"
      }
    ]
  },
  {
    day: "Day 4",
    poses: [
      {
        name: "Surya Namaskar",
        time: "10 mins",
        img: "https://scontent.fvga2-6.fna.fbcdn.net/v/t39.30808-6/500271340_626643837076381_1288534375035053725_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=qp9oJTf9gZYQ7kNvwEjECPL&_nc_oc=Adog2UfGvRaVGjTA2xfb1Bu03vNzYMNTIwuofmLOW-yRMc5TwyH5G_j1WK8XjmZs8h4&_nc_zt=23&_nc_ht=scontent.fvga2-6.fna&_nc_gid=kVK7BX2hx3xuFbuC_wKZAw&oh=00_Af3yd950OSedKfuJ6GrIG_I3rkVn6s8iQ96-uoPL69mdHQ&oe=69F18DA1"
      }
    ]
  },
  {
    day: "Day 5",
    poses: [
      {
        name: "Dhanurasana",
        time: "5 mins",
        img: "https://www.yogaclassplan.com/wp-content/uploads/2021/06/bowpose.png"
      }
    ]
  },
  {
    day: "Day 6",
    poses: [
      {
        name: "Shavasana",
        time: "10 mins",
        img: "data:image/jpeg;base64,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"
      }
    ]
  },
  {
    day: "Day 7",
    poses: [
      {
        name: "Meditation",
        time: "15 mins",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67qh_CyNkakU_somnKWY-xGFB0a5nchjyjw&s"
      }
    ]
  }
];

function Yoga() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [showPlan, setShowPlan] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!age || !weight) {
      setError("Please enter age and weight");
      return;
    }

    if (age < 10) {
      setError("Yoga is not recommended for children below 10 years");
      return;
    }
    if(weight < 30) {
      setError("Yoga is recommended for people above 30 kgs weight");
      return;
    }

    setError("");
    setShowPlan(true);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
        🧘 Yoga Plans
      </h1>

      {/* INPUT FORM */}
      <div className="bg-white p-6 rounded shadow mb-6">

        <input
          type="number"
          placeholder="Enter Age"
          className="border p-2 m-2"
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Weight (kg)"
          className="border p-2 m-2"
          onChange={(e) => setWeight(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded m-2"
        >
          Get Plan
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </div>

      {/* PLAN */}
      {showPlan && (
        <div>

          {age > 60 && (
            <p className="text-yellow-600 mb-4">
              ⚠️ For age above 60, consult doctor before doing yoga.
            </p>
          )}

          {yogaPlan.map((day, i) => (
            <div key={i} className="mb-6">

              <h2 className="text-xl font-bold text-green-600 mb-3">
                {day.day}
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {day.poses.map((pose, j) => (
                  <div key={j} className="bg-white p-4 rounded shadow">

                    <img
                      src={pose.img}
                      alt={pose.name}
                      className="w-full h-40 object-cover rounded mb-2"
                    />

                    <h3 className="font-semibold">{pose.name}</h3>
                    <p>⏱ {pose.time}</p>

                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default Yoga;