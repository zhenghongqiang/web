<style lang="">
  .btn{
    padding: 6px 10px;
    color:#fff;
    background: #ff5555;
    border: 0;
    outline: 0;
  }
  .btn:active{
      background: rgba(0,0,0,.7);
  }
  .red{
      color:#ff5555;
  }
</style>
<template>
    <div>
        这是第一个页面
        <ul>
            <template v-for="(item,index) in items">
                <li :key="index">
                    {{ index }} . {{ item.desc }}
                </li>
            </template>
        </ul>
        <div class="red">{{ info.title }}</div>
        <div class="red">{{ info.desc }}</div>
        <div class="red">{{ info.new }}</div>
        <button class="btn" @click="changeArr($event)">filter</button>
        <button class="btn" @click="editArr()">视图更新</button>
        <button class="btn" @click="editObj()">更改对象</button>
        <ul v-show="newArr.length > 0">
			<li>这是新数组</li>
          	<li v-for="(item,index) in newArr" :key="index">{{ index }} . {{ item.desc }}</li>
        </ul>
        <div>
            <button class="btn" @click="num++">我要点n次</button>
            <p class="red">{{ num }}</p>
        </div>
        <div id='example-3'>
            <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
            <input type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
            <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
            <br>
            <span>Checked names: {{ checkedNames }}</span>
        </div>
              
        <input v-model.lazy="age" type="number">
    </div>
</template>
<script>
export default {
  name: 'first',
  data () {
    return {
        checkedNames: [],
        num: 0,
        age: '',
        info: {
            age: '',
            title: '这是个对象的标题',
            desc: '这是个对象的描述',
        },
        items: [
            {
                id: 1,
                desc: '这是一段很长很长的描述2'
            },
            {
                id: 2,            
                desc: '这是一段很长很长的描述1'
            },
            {
                id: 3,            
                desc: '这是一段很长很长的描述3'
            }
        ],
        newArr: []
    }
  },
  watch: {
    age(val){
        console.log(val);
    },
  },
  methods: {
    changeArr (event) {
        console.log(event);
        this.newArr = this.items.filter((item,index,arr) => {
            return index > 1;
        })
    },
    editArr() {
        // this.items[0] = { desc:'123123'};
        // Vue.set(example1.items, indexOfItem, newValue)
        this.$set(this.items,0,{ desc:'123123'});
        this.items.splice(1,1,{ desc:'asd123123'});
    },
    editObj() {
        this.info.desc = '更新了~~~';
        this.$set(this.info,'new','添加新的')
        this.info = Object.assign({},this.info,{
            year:'12年'
        })
    }
  }
}
</script>