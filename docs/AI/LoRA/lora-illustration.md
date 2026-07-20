# LoRA: Low-Rank Adaptation Interactive Illustration

This page contains an interactive demonstration of LoRA (Low-Rank Adaptation), a parameter-efficient fine-tuning method for large language models.

<div style="background: linear-gradient(135deg, rgba(221, 160, 221, 0.1) 0%, rgba(181, 199, 234, 0.1) 100%); border-radius: 16px; padding: 20px; margin: 32px 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
<iframe src="../lora-illustration.html" width="100%" height="1200" frameborder="0" style="border: none; border-radius: 12px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);"></iframe>
</div>

## About LoRA

LoRA (Low-Rank Adaptation) is a popular parameter-efficient fine-tuning (PEFT) method that:

- **Freezes** the pre-trained model weights (W)
- **Injects** trainable rank decomposition matrices (A and B)
- **Reduces** the number of trainable parameters dramatically
- **Maintains** the ability to adapt to specific tasks efficiently

### Mathematical Foundation

Instead of updating a large weight matrix W directly, LoRA learns a low-rank update:

$$W' = W + \Delta W = W + B \times A$$

Where:
- **W** is the original frozen weight matrix (e.g., 8×8 in the demo)
- **A** and **B** are low-rank matrices (e.g., 8×r and r×8)
- **r** is the rank, typically much smaller than the matrix dimensions (e.g., r=2,4,8)
- **α** is a scaling factor for the LoRA update

### Interactive Demo Features

The visualization above allows you to:

- **Adjust the rank (r)**: See how different ranks affect the low-rank approximation
- **Control scaling (α)**: Modify the impact of the LoRA update on the final model
- **Edit matrix values**: Click on cells in A or B matrices to customize the adaptation
- **Visualize the process**: See how ΔW = B × A combines with W to create the adapted model W'

### Key Benefits

1. **Parameter Efficiency**: Only train A and B matrices instead of the full W
2. **Memory Efficiency**: Store only small LoRA weights per task instead of full model copies
3. **No Inference Latency**: LoRA weights can be merged with W during deployment
4. **Task Switching**: Easily swap different LoRA adapters for different tasks
