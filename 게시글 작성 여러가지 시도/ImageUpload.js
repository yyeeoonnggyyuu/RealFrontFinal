import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState([]); // 이미지 리스트
  const [existingFiles, setExistingFiles] = useState(new Set()); // 중복된 이미지를 막기 위한 Set

  // 이미지 추가 함수
  const addImageInput = () => {
    if (images.length >= 5) {
      alert('최대 5개의 이미지만 업로드할 수 있습니다.');
      return;
    }

    setImages((prevImages) => [
      ...prevImages,
      { id: Date.now(), file: null, fileName: '', checked: false },
    ]);
  };

  // 파일 선택 시 처리
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];
    const newImages = [...images];
    const previousFileName = newImages[index].fileName;

    if (file) {
      if (existingFiles.has(file.name) && file.name !== previousFileName) {
        alert('이미 이 이미지를 선택했습니다.');
        event.target.value = null; // 필드를 초기화
        return;
      }

      // 중복이 아닐 경우, Set에 추가하고 파일 이름 업데이트
      if (previousFileName) {
        setExistingFiles((prevFiles) => {
          const newFiles = new Set(prevFiles);
          newFiles.delete(previousFileName); // 이전 파일 이름 제거
          return newFiles;
        });
      }
      setExistingFiles((prevFiles) => new Set(prevFiles).add(file.name));

      newImages[index].file = file;
      newImages[index].fileName = file.name;
      setImages(newImages);
    } else {
      if (previousFileName) {
        setExistingFiles((prevFiles) => {
          const newFiles = new Set(prevFiles);
          newFiles.delete(previousFileName);
          return newFiles;
        });
      }
      newImages[index].file = null;
      newImages[index].fileName = '';
      setImages(newImages);
    }
  };

  // 체크박스 상태 변경
  const handleCheckboxChange = (index) => {
    const newImages = [...images];
    newImages[index].checked = !newImages[index].checked;
    setImages(newImages);
  };

  // 체크된 이미지 삭제
  const removeCheckedImages = () => {
    const newImages = images.filter((image) => !image.checked);
    setImages(newImages);

    // 중복된 파일 이름 제거
    const newExistingFiles = new Set(newImages.map((image) => image.fileName));
    setExistingFiles(newExistingFiles);
  };

  // 대표 이미지 레이블 업데이트
  const updateRepresentativeLabel = () => {
    const items = images;

    // 대표 이미지 레이블을 첫 번째 항목에만 추가
    return items.length > 0 ? (
      <span className="rep-img-label">대표 이미지</span>
    ) : null;
  };

  // 폼 제출 시 추가적인 검증 및 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (images.length === 0 || images.every((image) => !image.file)) {
      alert('적어도 하나의 이미지를 업로드해야 합니다.');
    } else {
      // 폼 제출 처리 로직
      console.log('폼 제출됨');
    }
  };

  return (
    <div>
      <form id="updateItemForm" onSubmit={handleSubmit}>
        <ul id="imageList">
          {images.map((item, index) => (
            <li key={item.id}>
              {index === 0 && updateRepresentativeLabel()}
              {index !== 0 && (
                <input
                  type="checkbox"
                  className="img-checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
              )}
              <input
                type="file"
                name="files"
                accept="image/*"
                required
                onChange={(e) => handleFileChange(index, e)}
              />
              <span>{item.fileName}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="remove-image-btn"
          onClick={removeCheckedImages}
          disabled={images.length <= 1}
        >
          체크된 이미지 삭제
        </button>

        <button type="button" onClick={addImageInput}>
          이미지 추가
        </button>

        <button type="submit">업로드</button>
      </form>
    </div>
  );
};

export default ImageUpload;
