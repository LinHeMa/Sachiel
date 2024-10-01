import React, { useRef } from 'react'

import { editComment } from '@/app/actions/comment'
import Avatar from '@/components/story-card/avatar'
import { useComment } from '@/context/comment-context'
import { useUser } from '@/context/user'
import useClickOutside from '@/hooks/use-click-outside'

const StoryCommentEditor = () => {
  const { state, dispatch } = useComment()
  const { isEditingComment } = state
  const { user } = useUser()
  const { name, avatar } = user
  const commentEditorRef = useRef(null)
  const handleCloseCommentEditor = () => {
    dispatch({ type: 'TOGGLE_COMMENT_EDITOR', payload: { isEditing: false } })
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'UPDATE_COMMENT_DRAFT', payload: e.target.value })
    // if none 取消編輯
  }
  const handleEdit = () => {
    if (!state.commentEditState.content.trim()) {
      dispatch({ type: 'RESET_EDIT_DRAWER' })
      dispatch({ type: 'TOGGLE_COMMENT_EDITOR', payload: { isEditing: false } })
      return
    }
    dispatch({ type: 'EDIT_COMMENT' })
    dispatch({ type: 'RESET_EDIT_DRAWER' })
    dispatch({ type: 'TOGGLE_COMMENT_EDITOR', payload: { isEditing: false } })
    editComment({
      memberId: user.memberId,
      commentId: state.commentEditState.commentId,
      content: state.commentEditState.content,
    })
  }
  useClickOutside(commentEditorRef, handleCloseCommentEditor)
  if (!isEditingComment) return null

  return (
    <div
      ref={commentEditorRef}
      className="fixed bottom-0 z-40 flex h-[216px] w-screen flex-col bg-white p-5 pt-3"
    >
      <section className="flex items-center justify-start gap-2">
        <Avatar src={avatar} size="l" />
        <p className="subtitle-2">{name}</p>
      </section>
      <textarea
        className="body-2 mt-3 flex max-h-24 grow overflow-y-scroll outline-none"
        name="editComment"
        id="editComment"
        onChange={handleTextChange}
        value={state.commentEditState.content}
      />
      <section
        onClick={handleEdit}
        className="body-2 flex items-center justify-end text-custom-blue"
      >
        {state.commentEditState.content.trim() ? '送出' : '取消編輯'}
      </section>
    </div>
  )
}

export default StoryCommentEditor
