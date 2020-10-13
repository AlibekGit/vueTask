<template>
    <div class="row">
        <div class="col s6 offset-s3">
            <h1>{{task.title}}</h1>


            <form @submit.prevent="submitHandler">

                <div class="chips" ref="chips"></div>
                <div class="input-field">
                    <textarea v-model="description" id="description" class="materialize-textarea" style="min-height: 150px"></textarea>
                    <label for="description">Description</label>
                    <span class="character-counter" style="float: right;font-size: 12px" >{{description.length}}/2048</span>
                </div>
                <input  type="text" ref="datePicker" class="datepicker">


                <button class="btn" type="submit" style="margin-right: 1rem;">Update</button>
                <button class="btn blue" type="button" @click="completeTask">Complete Task</button>
            </form>






        </div>




    </div>
</template>

<script>
    export default {
        name: "Tasks",
        computed:{
            task(){
                return this.$store.getters.taskById(+this.$route.params.id)
            }
        },
        data:() => ({
            description:'',
            chips: null,
            date:null
        }),
        methods:{
            completeTask(){
              this.$store.dispatch('completeTask',this.task.id)
                this.$router.push('/list')
            },
            submitHandler(){
                // eslint-disable-next-line no-undef
                this.$store.dispatch('updateTask', {
                    id:this.task.id,
                    description:this.description,
                    date:this.date.date
                })
                this.$router.push('/list')

            },
            destroyed(){
                if (this.chips && this.chips.destroy){
                    this.chips.destroy()
                }
                if (this.date && this.date.destroy){
                    this.date.destroy()
                }
            }
        },
        mounted() {
            setTimeout(()=>{
                // eslint-disable-next-line no-undef
                M.updateTextFields()
            },0)
            this.description=this.task.description
            // eslint-disable-next-line no-undef
            this.chips = M.Chips.init(this.$refs.chips, {
                placeholder: 'Task Tags',
                data:this.task.tags
            });
            // eslint-disable-next-line no-undef
            this.date = M.Datepicker.init(this.$refs.datePicker, {
                format:'dd.mm.yyyy',
                defaultDate: new Date(this.task.date),
                setDefaultDate: true
            });
        }
    }
</script>

<style scoped>

</style>