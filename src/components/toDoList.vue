<template>
    <div id="to-do-list" class="div1">
        <div class="div2">
            <h1>Jquery to do list</h1>
            <em>simple Todo List with adding and filter by diff status.</em>
            <br/>
            <input class="input1" type="text" v-model="newItem"
                   placeholder="enter your new item"
                   v-on:keyup.enter="addNewItem"/>
            <button class="add" v-on:click="addNewItem">Add</button>
            <br/><br/>
            <div>
                <div v-for="(item,index) in returnList()" v-bind:key="item.id "
                     class="div3" v-on:change="addNewItem">
                    <span v-if="item.addToComplete">{{ index++ }}.</span>
                    <span v-else> {{ index++ }}.</span>
                    <div class="listShowDiv">
                        <div class="listShow">
                            <input type="checkbox" v-model="item.completed"
                                   class="input2"
                                   v-on:click="setItemCompleted(item)">
                            <span v-if="item.completed"
                                  class="toDoCompleted">{{item.data}}</span>
                            <span v-else v-on:dblclick="setItemActive(item)">{{item.data}}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="selectButton">
                    <a href="#" v-on:click="setFilterCondition('ALL')">ALL</a>
                    <a href="#" v-on:click="setFilterCondition('ACTIVE')">ACTIVE</a>
                    <a href="#" v-on:click="setFilterCondition('COMPLETE')">COMPLETE</a>
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
                    completed: false
                }),
                    this.newItem = '',
                    this.listIndex++
            },
            setItemCompleted(listItem) {
                listItem.completed = !listItem.completed
            },
            setFilterCondition(filterCondition) {
                this.filterCondition = filterCondition;
            },
            returnList() {
                if (this.filterCondition === "ACTIVE") {
                    return this.showList.filter(item => !item.completed)
                }
                if (this.filterCondition === "COMPLETE") {
                    return this.showList.filter(item => item.completed)
                }
                return this.showList;
            },
            addToComplete(listItem) {
                listItem.data = this.tempToDo;
                listItem.removeItem = false;
                this.tempToDo = ''
            },
            setItemActive(listItem) {
                listItem.removeItem = true;
            }
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
        border:outset darkolivegreen 5px;
        padding: 30px;
        width: 450px;
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
        font-size: 20px;
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
        outline: none;
        color: darksalmon;
        margin: 15px;
    }

    .toDoCompleted {
        text-decoration: line-through;
    }

    .input2 {
        width: 20px;
        height: 20px;
    }
</style>
