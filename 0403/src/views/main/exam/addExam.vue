<template>
  <div class="addExam">
    <h2>添加考试</h2>
    <div class="cont">
      <div class="in-cont">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="110px"
          class="demo-ruleForm"
        >
          <el-form-item label="试题名称" prop="questionName">
            <el-input class="testName" v-model="ruleForm.questionName"></el-input>
          </el-form-item>
          <el-form-item label="选择考试类型" prop="testType">
            <el-select v-model="ruleForm.testType" placeholder="请选择考试类型">
              <el-option v-for="(v, i) in testType" :key="i" :label="v.questions_type_text" :value="v.questions_type_id"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="选择课程" prop="course">
            <el-select v-model="ruleForm.course" placeholder="请选择课程">
              <el-option v-for="(v, i) in quesTitle" :key="i" :label="v.subject_text" :value="v.subject_id"></el-option>
            </el-select>
          </el-form-item>
                <el-form-item  label="设置题量" prop="setQuestinsNum">
            <el-input v-model="ruleForm.setQuestinsNum"></el-input>
          </el-form-item>
          <el-form-item label="考试时间" required>
            <el-col :span="11">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="开始时间"
                  v-model="ruleForm.date1"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col class="line"  align="center" :span="2">-</el-col>
             <el-col :span="11">
              <el-form-item prop="date2">
                <el-date-picker
                  type="date"
                  placeholder="结束时间"
                  v-model="ruleForm.date2"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
             <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                questionName: "",
                setQuestinsNum:"",
                testType: "",
                course:"",
                date1: "",
                date2: "",
                delivery: false,
                type: [],
                resource: "",
                desc: ""
            },
            quesTitle:[],
            testType:[],
            rules: {
                questionName: [
                    { required: true, message: "请输入试卷名称", trigger: "blur" },
                    { min: 3, max: 15, message: "长度在 3 到 15 个汉字", trigger: "blur" }
                ],
                setQuestinsNum: [
                    { required: true, message: "请输入题量", trigger: "blur" },
                    { min: 1, max: 3, message: "长度在 1 到 3 个字符", trigger: "blur" }
                ],
                testType: [
                    { required: true, message: "请选择考试类型", trigger: "change" }
                ],
                course: [
                    { required: true, message: "请选择课程", trigger: "change" }
                ],
                date1: [
                    {
                        type: "date",
                        required: true,
                        message: "请选择开始时间",
                        trigger: "change"
                    }
                ],
                date2: [
                    {
                        type: "date",
                        required: true,
                        message: "请选择结束时间",
                        trigger: "change"
                    }
                ],
                type: [
                    {
                        type: "array",
                        required: true,
                        message: "请至少选择一个活动性质",
                        trigger: "change"
                    }
                ],
                resource: [
                    { required: true, message: "请选择活动资源", trigger: "change" }
                ],
                desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
            }
        };
    },
    methods: {
        async submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    return true
                } else {
                    return false;
                }
            });
            // eslint-disable-next-line camelcase
            let res = await  this.$createTest({subject_id:this.ruleForm.course, exam_id:this.ruleForm.testType, title:this.ruleForm.questionName, number:Number(this.ruleForm.setQuestinsNum), start_time:this.ruleForm.date1.getTime(), end_time:this.ruleForm.date2.getTime()});
            res.code === 1 ? this.$message({message:res.data.msg, type :"success"}) : this.$message({message:res.data.msg, type :"waring"})
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    async created(){
        //获取所有课程的列表
        await this.$getSubject().then(res=> this.quesTitle = res.data.data);
        
        //获取所有试题类型的接口
        await this.$getQuestions().then(res=> this.testType = res.data.data);  
    }
};
</script>

<style lang="scss" scoped>
.addExam {
  width: 100%;
  height: 100%;
  min-width: 760px;
  h2 {
    padding: 30px 24px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .cont {
    box-sizing: border-box;
    border-radius: 10px;
    margin: 0 24px;
    background: #ffffff;
    .in-cont{
      padding: 30px;
    form{
      width: 50%;
      font-size: 12px;
      .testName{
        width: 43.5%;
        min-width: 217px;
      }
      }
    }
  }
}
</style>
