import React, { memo } from 'react'
import {
  StepBackwardFilled,
  StepForwardFilled,
  FastBackwardFilled,
  FastForwardFilled,
  CaretUpFilled,
  CaretDownFilled,
  CaretLeftFilled,
  CaretRightFilled,
  UpCircleFilled,
  DownCircleFilled,
  LeftCircleFilled,
  RightCircleFilled,
  ForwardFilled,
  BackwardFilled,
  PlayCircleFilled,
  UpSquareFilled,
  DownSquareFilled,
  LeftSquareFilled,
  RightSquareFilled,
  QuestionCircleFilled,
  PlusCircleFilled,
  PauseCircleFilled,
  MinusCircleFilled,
  PlusSquareFilled,
  MinusSquareFilled,
  InfoCircleFilled,
  ExclamationCircleFilled,
  CloseCircleFilled,
  CloseSquareFilled,
  CheckCircleFilled,
  CheckSquareFilled,
  ClockCircleFilled,
  WarningFilled,
  StopFilled,
  EditFilled,
  CopyFilled,
  DeleteFilled,
  SnippetsFilled,
  DiffFilled,
  HighlightFilled
} from '@ant-design/icons'
import { PageInfo } from '_c'
import { IconWrap, IconItem } from './styled'

const Icon = (props) => {
  return (
    <IconWrap>
      <PageInfo title='Icon 图标'>
        <p>语义化的矢量图形。</p>
      </PageInfo>
      <IconItem>
        <h2>方向性图标</h2>
        <ul>
          <li>
            <StepBackwardFilled />
            <p>StepBackwardFilled</p>
          </li>
          <li>
            <StepForwardFilled />
            <p>StepForwardFilled</p>
          </li>
          <li>
            <FastBackwardFilled />
            <p>FastBackwardFilled</p>
          </li>
          <li>
            <FastForwardFilled />
            <p>FastForwardFilled</p>
          </li>
          <li>
            <CaretUpFilled />
            <p>CaretUpFilled</p>
          </li>
          <li>
            <CaretDownFilled />
            <p>CaretDownFilled</p>
          </li>

          <li>
            <CaretLeftFilled />
            <p>CaretLeftFilled</p>
          </li>
          <li>
            <CaretRightFilled />
            <p>CaretRightFilled</p>
          </li>
          <li>
            <UpCircleFilled />
            <p>UpCircleFilled</p>
          </li>
          <li>
            <DownCircleFilled />
            <p>DownCircleFilled</p>
          </li>
          <li>
            <LeftCircleFilled />
            <p>LeftCircleFilled</p>
          </li>
          <li>
            <RightCircleFilled />
            <p>RightCircleFilled</p>
          </li>
          <li>
            <ForwardFilled />
            <p>ForwardFilled</p>
          </li>
          <li>
            <BackwardFilled />
            <p>BackwardFilled</p>
          </li>
          <li>
            <PlayCircleFilled />
            <p>PlayCircleFilled</p>
          </li>
          <li>
            <UpSquareFilled />
            <p>UpSquareFilled</p>
          </li>
          <li>
            <DownSquareFilled />
            <p>DownSquareFilled</p>
          </li>
          <li>
            <LeftSquareFilled />
            <p>LeftSquareFilled</p>
          </li>
          <li>
            <RightSquareFilled />
            <p>RightSquareFilled</p>
          </li>
        </ul>
      </IconItem>
      <IconItem>
        <h2>建议性图标</h2>
        <ul>
          <li>
            <QuestionCircleFilled />
            <p>QuestionCircleFilled</p>
          </li>
          <li>
            <PlusCircleFilled />
            <p>PlusCircleFilled</p>
          </li>
          <li>
            <PauseCircleFilled />
            <p>PauseCircleFilled</p>
          </li>
          <li>
            <MinusCircleFilled />
            <p>MinusCircleFilled</p>
          </li>
          <li>
            <PlusSquareFilled />
            <p>PlusSquareFilled</p>
          </li>
          <li>
            <MinusSquareFilled />
            <p>MinusSquareFilled</p>
          </li>
          <li>
            <InfoCircleFilled />
            <p>InfoCircleFilled</p>
          </li>
          <li>
            <ExclamationCircleFilled />
            <p>ExclamationCircleFilled</p>
          </li>
          <li>
            <CloseCircleFilled />
            <p>CloseCircleFilled</p>
          </li>
          <li>
            <CloseSquareFilled />
            <p>CloseSquareFilled</p>
          </li>
          <li>
            <CheckCircleFilled />
            <p>CheckCircleFilled</p>
          </li>
          <li>
            <CheckSquareFilled />
            <p>CheckSquareFilled</p>
          </li>
          <li>
            <ClockCircleFilled />
            <p>ClockCircleFilled</p>
          </li>
          <li>
            <WarningFilled />
            <p>WarningFilled</p>
          </li>
          <li>
            <StopFilled />
            <p>StopFilled</p>
          </li>
        </ul>
      </IconItem>
      <IconItem>
        <h2>编辑类图标</h2>
        <ul>
          <li>
            <EditFilled />
            <p>EditFilled</p>
          </li>
          <li>
            <CopyFilled />
            <p>CopyFilled</p>
          </li>
          <li>
            <DeleteFilled />
            <p>DeleteFilled</p>
          </li>
          <li>
            <SnippetsFilled />
            <p>SnippetsFilled</p>
          </li>
          <li>
            <DiffFilled />
            <p>DiffFilled</p>
          </li>
          <li>
            <HighlightFilled />
            <p>HighlightFilled</p>
          </li>
        </ul>
      </IconItem>
    </IconWrap>
  )
}

export default memo(Icon)
