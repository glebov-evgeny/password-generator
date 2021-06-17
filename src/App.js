import './App.scss';

function App() {
    function allLogic(e) {
        /* анимация кнопки */
        e.target.classList.remove('animate');
        e.target.classList.add('animate');

        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);

        /* логика пароля */
        let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let gapArray = [];
        let total;

        for(let i=0; i<4; i++){
            gapArray.push(
                arr_num[Math.floor(Math.random() * arr_num.length)]
            )
            gapArray.push(
                arr_EN[Math.floor(Math.random() * arr_EN.length)]
            )
            gapArray.push(
                arr_en[Math.floor(Math.random() * arr_en.length)]
            )
        }

        /* перемешиваем объекты массива */
        function shuffle(gapArray) {
            let currentIndex = gapArray.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = gapArray[currentIndex];
                gapArray[currentIndex] = gapArray[randomIndex];
                gapArray[randomIndex] = temporaryValue;
            }

            return gapArray;
        }
        shuffle(gapArray);

        /* приводим к строке */
        total = gapArray.join('');

        let text = document.querySelector('.app__block-pswrd');
        text.textContent = total;
    };




  return (
    <div className="app">

          <div className="app__block">
                <h2 className="app__block-title">Генератор паролей</h2>
                <div className="app__block-pswrd">- - - - -</div>
                <p className="app__block-text"><b>Комментарий:</b> 12 символов, из них 4 цифры и 8 латинских букв в верхнем и нижнем регистре.</p>
                <button className="app__block-button" onClick={allLogic}>жмяк</button>
                <div className="app__block-decoration app__block-decoration-01"></div>
                <div className="app__block-decoration app__block-decoration-02"></div>
          </div>


    </div>
  );
}

export default App;
