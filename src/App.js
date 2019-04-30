import React, {Component} from 'react';
import './App.css';


const code = `
public class Solution {

    public static int reverseNumber(int n) {
        int reversed = 0;

        while (n > 0) {
            reversed = reversed * 10 + n % 10;
            n = n / 10;
        }
        return reversed;
    }

    public static boolean isPalindrome(int n) {
        return n == reverseNumber(n);
    }

    public static void main(String[] args) {

        int max = 0;

        for (int i = 999; i > 99; i--) {
            for (int j = i; j > 99; j--) {
                if (isPalindrome(i * j)) {
                    if(max < i * j) {
                        max = i * j;
                    }
                }
            }
        }

        System.out.println(max);
    }

}
`;


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: "",
      counter: 3,
    };
    this.addCharacter = this.addCharacter.bind(this);
  }

  addCharacter() {
    console.log("add character");
    this.setState(prevState => {
      return {
        code: code.substring(0, prevState.counter),
        counter: prevState.counter + 3,
      }});
  }

  render() {
    return (
        <div className="App" onKeyPress={this.addCharacter} tabIndex="0">
          {this.state.code}
        </div>
    );
  }
}

export default App;
