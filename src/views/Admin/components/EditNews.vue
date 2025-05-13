<template>
  <div class="news-editor">
    <div class="actions">
      <el-button type="primary" @click="submitDialogVisible = true" style="margin-right: 10px">保存修改</el-button>
      <el-button type="primary" size="default" @click="handleSaveAsDraft">存为草稿</el-button>
      <el-button type="danger" @click="quitDialogVisible = true" style="margin-right: 10px">放弃编辑</el-button>
    </div>

    <el-form :model="formData" :rules="rules" ref="formRef" label-width="100px" class="news-form">
      <el-form-item label="标题" prop="title">
        <el-input v-model="formData.title" placeholder="请输入新闻标题" />
      </el-form-item>
    </el-form>

    <div class="editor-container">
      <Toolbar style="border-bottom: 1px solid #ccc;" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="handleCreated" />
    </div>

    <div class="actions-bottom">
      <el-button type="primary" @click="submitDialogVisible = true" style="margin-right: 10px">保存修改</el-button>
      <el-button type="primary" size="default" @click="handleSaveAsDraft">存为草稿</el-button>
      <el-button type="danger" @click="quitDialogVisible = true" style="margin-right: 10px">放弃编辑</el-button>
    </div>

    <!-- 保存确认对话框 -->
    <el-dialog v-model="submitDialogVisible" title="保存确认" width="500" :before-close="handleSubmitClose"
      :lock-scroll="false">
      <div style="line-height: 1.5em">
        <p>请确保新闻内容符合以下要求：</p>
        <p>1. 使用文明、友善的语言，禁止使用侮辱性、攻击性或歧视性词汇。</p>
        <p>2. 禁止发布任何违反法律法规的内容。</p>
        <p>3. 确保新闻内容的真实性和准确性。</p>
        <p>4. 避免涉及敏感话题，保持内容中立。</p>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="submitDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSave">确认保存</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 退出确认对话框 -->
    <el-dialog v-model="quitDialogVisible" title="提示" width="500" :before-close="handleQuitClose" :lock-scroll="false">
      <span>修改未保存！确认放弃？</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="quitDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleCancel">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()
const editorRef = shallowRef()
const valueHtml = ref('')
const mode = ref('simple')
const formRef = ref(null)

// 表单数据
const formData = ref({
  title: '',
  id: ''
})

// 表单验证规则
const rules = {
  title: [
    { required: true, message: '请输入新闻标题', trigger: 'blur' },
    { min: 2, max: 100, message: '标题长度在 2 到 100 个字符', trigger: 'blur' }
  ]
}

// 工具栏配置
const toolbarConfig = {
  excludeKeys: [
    'color',
    'bgColor',
    'todo',
    'group-image',
    'insertVideo',
    'insertTable',
    'codeBlock'
  ]
}

// 编辑器配置
const editorConfig = {
  placeholder: '请输入新闻内容...'
}

// 对话框状态
const submitDialogVisible = ref(false)
const quitDialogVisible = ref(false)

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor) => {
  editorRef.value = editor
}

const handleSubmitClose = (done) => {
  done()
}

const handleQuitClose = (done) => {
  done()
}

// 获取新闻详情
const getNewsDetail = async () => {
  try {
    // TODO: 实现获取新闻详情的 API 调用
    const mockData = {
      id: route.params.id,
      title: '示例新闻标题',
      content: '<p>这是示例新闻内容</p>'
    }
    formData.value = {
      id: mockData.id,
      title: mockData.title
    }
    valueHtml.value = mockData.content
  } catch (error) {
    console.error('Failed to fetch news detail:', error)
    ElMessage.error('获取新闻详情失败！')
  }
}

const handleSave = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // TODO: 实现更新新闻的 API 调用
        await new Promise(resolve => setTimeout(resolve, 500))
        ElMessage.success('保存成功！')
        submitDialogVisible.value = false
        router.push('/admin/news')
      } catch (error) {
        console.error('Failed to update news:', error)
        ElMessage.error('保存失败，请重试！')
      }
    }
  })
}

const handleSaveAsDraft = async () => {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        // TODO: 实现保存草稿的 API 调用
        await new Promise(resolve => setTimeout(resolve, 500))
        ElMessage.success('已存为草稿！')
        router.push('/admin/news')
      } catch (error) {
        console.error('Failed to save draft:', error)
        ElMessage.error('保存失败，请重试！')
      }
    }
  })
}

const handleCancel = () => {
  quitDialogVisible.value = false
  router.back()
}

onMounted(() => {
  getNewsDetail()
})
</script>

<style scoped lang="scss">
.news-editor {
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .actions {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
  }

  .news-form {
    margin-bottom: 20px;
  }

  .editor-container {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .actions-bottom {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>