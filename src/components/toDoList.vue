<template>
    <div id="to-do-list" class="div1">
        <div class="div2">
            <h1>Jquery to do list</h1>
            <em>simple Todo List with adding and filter by diff status.</em>
            <br/>
            <input class="input1" type="text" v-model="newItem"
                   placeholder="please enter your new item^_^"
                   v-on:keyup.enter="addNewItem"/>
            <button class="add" v-on:click="addNewItem">Add</button>
            <br/><br/>

            <div>
                <div v-for="(item,index) in returnList()" v-bind:key="item.id"
                     class="div3" v-on:change="addNewItem">
                    <span v-if="item.addToComplete">{{ index++ }}.</span>
                    <span v-else> {{ index++ }}.</span>
                    <div class="listShowDiv">
                        <div class="listShow">
                            <div v-if="item.removeItem" class="completedItem">
                                <input type="text" v-model="newItem"
                                       v-on:keyup.enter="addToComplete(item)">
                            </div>
                            <div v-else class="notCompletedItem">
                                <input type="checkbox" v-model="item.completed"
                                       class="input2"
                                       v-on:click="setItemCompleted(item)">
                                <span v-if="item.completed"
                                      class="toDoCompleted">{{item.data}}</span>
                                <span v-else v-on:dblclick="setItemActive(item)">{{item.data}}</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="!item.removeItem"
                         v-on:click="removeToDo(item)"
                         class="toDoDeleteDiv">
                        <span>&times;</span>
                    </div>
                </div>
            </div>

            <div>
                <div class="selectButton">
                    <a href="#" v-on:click="filterByCondition('ALL')">ALL</a>
                    <a href="#" v-on:click="filterByCondition('ACTIVE')">ACTIVE</a>
                    <a href="#" v-on:click="filterByCondition('COMPLETE')">COMPLETE</a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "to-do-list",
        data() {
            return {
                listIndex: 1,
                newItem: '',
                currentItem: '',
                showList: [],
                filterCondition: "ALL"
            }
        },
        methods: {
            addNewItem: function () {
                if (this.newItem.trim().length === 0) {
                    return
                }
                this.showList.push({
                    id: this.listIndex,
                    data: this.newItem,
                    completed: false,
                    removeItem: false
                }),
                    this.newItem = '',
                    this.listIndex++
            },
            
        },
    }
</script>

<style scoped>
    .div1 {
        padding: 20px;
        height: 100%;
        position: relative;
    }

    .div2 {
        background-color: white;
        border-radius: 5px;
        border: #42b983 20px solid;
        padding: 30px;
        width: 500px;
        height: auto;
        margin: auto;
    }

    .add {
        color: white;
        background-color: lightcoral;
        border: unset;
        border-radius: 5px;
        margin-left: 10px;
        width: 80px;
        height: 35px;
        font-size: 20px;
        float: left;
    }

    .input1 {
        float: left;
        height: 30px;
        width: 350px;
        font-size: 25px;
    }

    .div3 {
        margin-top: 20px;
        padding: 10px;
        border-radius: 5px;
        font-size: 25px;
    }

    .div3:nth-child(odd) {
        background-color: lightcoral;
    }

    .listShowDiv {
        display: inline-block;
        text-align: left;
        width: 350px;
    }

    .listShow {
        display: inline-block;
    }

    .selectButton {
        margin-bottom: 10px;
        padding-top: 20px;
    }

    .selectButton a {
        text-decoration: none;
        outline: none;
        color: darksalmon;
        margin: 15px;
    }

    .completedItem {
        display: inline-block;
    }

    .notCompletedItem {
        display: inline-block;
    }

    .toDoCompleted {
        text-decoration: line-through;
    }

    .input2 {
        width: 20px;
        height: 20px;
    }
</style>
