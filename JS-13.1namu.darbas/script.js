// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jona2“, age: 25}]
// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.

//======== 1 sprendimas ========
const minutesToSeconds = minutes => `${minutes * 60} seconds`
const result = minutesToSeconds(12)
console.log(result)

//========== 2 sprendimas ========
const daysLived = age => age * 365
const result1 = daysLived(17)
console.log(result1)

//=========== 3 sprendimas =========
const square = num => num ** 2

const result2 = square(50)
console.log(result2) 

// ============ 4 sprendimas ========
const triangleArea = (height, width) => (height * width) / 2

const result3 = triangleArea(10, 10)
console.log(result3)

// ============ 5 sprendimas =========
const lastLetter = str => str.slice(-1)

const result4 = lastLetter("Jurgis")
console.log(result4)

// ========= 6 sprendimas========
 function apverstiIrMažosiomis(tekstas) {
    const apverstasTekstas = tekstas.split('').reverse().join('').toLowerCase()
    return apverstasTekstas
  }
  const pradinisTekstas = "Laurynas"
  const apverstas = apverstiIrMažosiomis(pradinisTekstas)
  console.log(apverstas)
   
// ========== 7 sprendimas==========
function didziausiasNeigiamas(array) {
    const neigiami = array.filter(number => number < 0)
     return Math.max(...neigiami).toString()
  }
  const skaiciai = [-2, -57, -5, 17, 0, 11]
  const rezultatas = didziausiasNeigiamas(skaiciai)
  console.log(rezultatas)

// ============ 8 sprendimas =========
function generuotiAtsitiktinius(sk) {
    const atsitiktiniai = []
    for (let i = 0; i < sk; i++) {
      const atsitiktinisSk = Math.floor(Math.random() * 10) + 1
      atsitiktiniai.push(atsitiktinisSk)
    }
    return atsitiktiniai
  }
  const kiekis = 3
  const atsitiktiniaiSkaiciai = generuotiAtsitiktinius(kiekis)
  console.log(atsitiktiniaiSkaiciai)

// ============ 9 sprendimas ========
const arSumaDidesneUz100 = (sk1, sk2) => sk1 + sk2 > 100
const rezultatas1 = arSumaDidesneUz100(57, 50)
console.log(rezultatas1)

// ============ 10 sprendimas =========
// fn([{name: „Alfredas“, age: 25}, {name: „Robertas“, age: 22}, {name: „Kastytis“, age: 32}])
function rikiuotiPagalAmziuIrVarda(masyvas) {
    const surikiuotasMasyvas = masyvas.sort((a, b) => {
      if (a.age === b.age) {
        return a.name.localeCompare(b.name)
      }
      return b.age - a.age
    })
    return surikiuotasMasyvas
  }
  const zmones = [
    { name: "Alfredas", age: 25 },
    { name: "Robertas", age: 22 },
    { name: "Kastytis", age: 32 }
  ] 
  const rezultatas2 = rikiuotiPagalAmziuIrVarda(zmones)
  console.log(rezultatas2)
  
// ============ 11 sprendimas ==========
const arIseigine = (data) => {
    //  masyvas su išeiginėmis datomis (mėn. nr. nuo 0)
    const iseigines = [new Date(data.getFullYear(), 0, 1), new Date(data.getFullYear(), 11, 25)]
  
    // ar įvesta data yra išeiginė
    return iseigines.some(iseigine => iseigine.getTime() === data.getTime())
  }
  const pavyzdineData = new Date(2020, 11, 25)
  const rezultatas3 = arIseigine(pavyzdineData)
  console.log(rezultatas3)
// =========== 12 sprendimas ============
function maziausiasTrukstamas(array) {
    //  masyvas didėjimo tvarka
    array.sort((a, b) => a - b)
    // Ieškom mažiausio trūkstamo sk.
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1] - array[i] > 1) {
        return array[i] + 1
      }
    }
  }
  const skaiciai1 = [9, 7, 5, 6, 10]
  const rezultatas4 = maziausiasTrukstamas(skaiciai1)
  console.log(rezultatas4)